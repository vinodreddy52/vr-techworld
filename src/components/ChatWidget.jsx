import { useState, useRef, useEffect } from "react";
import { SERVICES, STEPS, GUIDE, FAQS, UI, LANGS, SLOTS, CLOSED_DAYS, PHONE, WA, EMAIL } from "./botData";
import { reply, serviceById, MENU } from "./botBrain";
import "./ChatWidget.css";

// Same Formspree form as your Contact page (chat leads arrive in the same inbox)
const FORMSPREE = "https://formspree.io/f/mrenjbwk";

const STORE = "vr_chat_v3";
const LOCALE = { en: "en-IN", te: "te-IN", hi: "hi-IN" };

const read = (k) => { try { return sessionStorage.getItem(k); } catch { return null; } };
const write = (k, v) => { try { sessionStorage.setItem(k, v); } catch {} };

const greeting = (lang) => ({
  id: 1, role: "assistant", type: "text", time: Date.now(), content: UI[lang].greet, chips: MENU,
});

function loadMessages(lang) {
  try {
    const s = JSON.parse(read(STORE));
    if (Array.isArray(s) && s.length) return s;
  } catch {}
  return [greeting(lang)];
}

const timeStr = (t) => new Date(t).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
const pad = (n) => String(n).padStart(2, "0");
const iso = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const fmtDate = (s, lang) =>
  new Date(s + "T00:00:00").toLocaleDateString(LOCALE[lang], { weekday: "short", day: "numeric", month: "short", year: "numeric" });

function linkify(text) {
  return (text || "").split(/(https?:\/\/[^\s]+)/g).map((p, i) =>
    /^https?:\/\//.test(p)
      ? <a key={i} href={p} target="_blank" rel="noreferrer" className="cw-link">{p.includes("wa.me") ? "WhatsApp" : p}</a>
      : p
  );
}

/* ---------- Small components ---------- */
function ServiceGrid({ ids, lang, onPick }) {
  return (
    <div className="cw-grid">
      {ids.map((id) => {
        const s = serviceById(id);
        return <button key={id} onClick={() => onPick(s)}><span>{s.icon}</span>{s.t[lang].title}</button>;
      })}
    </div>
  );
}

function ServiceCard({ svc, lang, onQuote, onBook, onAll }) {
  const c = UI[lang].card, t = svc.t[lang];
  return (
    <div className="cw-card">
      <div className="cw-card-h"><span>{svc.icon}</span> {t.title}</div>
      <p>{t.short}</p>
      <b>{c.need}</b>
      <ul>{t.needs.map((x) => <li key={x}>{x}</li>)}</ul>
      <small>{c.note}</small>
      <div className="cw-btnrow">
        <button className="primary" onClick={() => onQuote(svc)}>{c.quote}</button>
        <button onClick={() => onBook(svc)}>{c.book}</button>
        <button onClick={onAll}>{c.all}</button>
      </div>
    </div>
  );
}

function Steps({ lang }) {
  return (
    <div className="cw-card">
      {STEPS.map((s, i) => (
        <div className="cw-step" key={i}>
          <span className="cw-num">{i + 1}</span>
          <div><b>{s[lang][0]}</b><br />{s[lang][1]}</div>
        </div>
      ))}
    </div>
  );
}

function ContactCard({ lang }) {
  const u = UI[lang];
  return (
    <div className="cw-card">
      <a className="cw-cbtn" href={`tel:+${PHONE}`}>📞 {u.call} +91 90422 38332</a>
      <a className="cw-cbtn wa" href={WA} target="_blank" rel="noreferrer">💬 {u.wa}</a>
      <a className="cw-cbtn" href={`mailto:${EMAIL}`}>✉️ {EMAIL}</a>
    </div>
  );
}

/* ---------- Quote / Booking form (emails you via Formspree) ---------- */
function LeadForm({ kind, service, lang, onDone }) {
  const f = UI[lang].form;
  const isBook = kind === "book";
  const [v, setV] = useState({ name: "", phone: "", service: service || "", date: "", slot: "", notes: "" });
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
  const maxDay = new Date(); maxDay.setDate(maxDay.getDate() + 30);

  async function submit(e) {
    e.preventDefault();
    setErr("");
    const digits = v.phone.replace(/\D/g, "").slice(-10);
    if (v.name.trim().length < 2) return setErr(f.eName);
    if (digits.length !== 10) return setErr(f.ePhone);
    if (!v.service) return setErr(f.eService);
    if (isBook) {
      if (!v.date) return setErr(f.eDate);
      if (CLOSED_DAYS.includes(new Date(v.date + "T00:00:00").getDay())) return setErr(f.eClosed);
      if (!v.slot) return setErr(f.eSlot);
    }

    // Details are always sent in English so your team can read them easily
    const svcName = serviceById(v.service)?.t.en.title || "Not sure / other";
    const typeLabel = isBook ? "Consultation booking" : "Quote request";
    const data = {
      type: typeLabel,
      name: v.name.trim(),
      phone: digits,
      service: svcName,
      date: isBook ? v.date : "",
      slot: isBook ? v.slot : "",
      notes: v.notes.trim(),
      language: lang,
      page: window.location.pathname,
    };
    const lines = [
      isBook ? "Hello VR Digital, I'd like to book a free consultation." : "Hello VR Digital, I'd like a quote.",
      `Name: ${data.name}`,
      `Phone: ${digits}`,
      `Service: ${svcName}`,
      isBook ? `Date: ${data.date}` : "",
      isBook ? `Time: ${data.slot}` : "",
      data.notes ? `Notes: ${data.notes}` : "",
    ].filter(Boolean);
    const waLink = `${WA}?text=${encodeURIComponent(lines.join("\n"))}`;

    setBusy(true);
    let emailed = true;
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `${typeLabel} from ${data.name} (website chat)`,
          ...data,
        }),
      });
      if (!res.ok) throw new Error("send failed");
    } catch (error) {
      console.error("Chat lead error:", error);
      emailed = false;
    }
    onDone({ kind, name: data.name, date: data.date, slot: data.slot, wa: waLink, emailed });
  }

  return (
    <form className="cw-form" onSubmit={submit}>
      <strong>{isBook ? f.bookT : f.quoteT}</strong>
      <input placeholder={f.name} value={v.name} onChange={set("name")} autoComplete="name" />
      <input placeholder={f.phone} inputMode="numeric" value={v.phone} onChange={set("phone")} autoComplete="tel" />
      <select value={v.service} onChange={set("service")}>
        <option value="">{f.pick}</option>
        {SERVICES.map((s) => <option key={s.id} value={s.id}>{s.t[lang].title}</option>)}
        <option value="other">{f.other}</option>
      </select>

      {isBook && (
        <>
          <label className="cw-lbl">{f.date}</label>
          <input type="date" min={iso(tomorrow)} max={iso(maxDay)} value={v.date} onChange={set("date")} />
          <label className="cw-lbl">{f.slot}</label>
          <div className="cw-slots">
            {SLOTS.map((s) => (
              <button type="button" key={s} className={v.slot === s ? "on" : ""} onClick={() => setV({ ...v, slot: s })}>{s}</button>
            ))}
          </div>
        </>
      )}

      <input placeholder={f.notes} value={v.notes} onChange={set("notes")} maxLength={200} />
      {err && <div className="cw-error">{err}</div>}
      <small className="cw-consent">{f.consent}</small>
      <button type="submit" disabled={busy}>{busy ? f.sending : f.send}</button>
    </form>
  );
}

/* ---------- Main widget ---------- */
export default function ChatWidget() {
  const [lang, setLang] = useState(() => (UI[read("vr_lang")] ? read("vr_lang") : "en"));
  const [open, setOpen] = useState(false);
  const [teaser, setTeaser] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState(() => loadMessages(lang));
  const endRef = useRef(null);
  const inputRef = useRef(null);
  const nextId = useRef(Date.now());
  const u = UI[lang];

  useEffect(() => { write(STORE, JSON.stringify(messages)); }, [messages]);

  useEffect(() => {
    if (read("vr_teaser") === "1") return;
    const t = setTimeout(() => setTeaser(true), 4000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, open, loading]);

  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function openChat() { setOpen(true); setTeaser(false); write("vr_teaser", "1"); }

  const mk = (role, m) => ({ id: nextId.current++, role, time: Date.now(), ...m });

  function send(opts = {}) {
    const text = (opts.text ?? "").trim();
    if (loading || (!opts.action && !text)) return;
    const label = opts.label || text;
    setInput("");
    setMessages((m) => [...m.map((x) => ({ ...x, chips: undefined })), mk("user", { type: "text", content: label })]);
    setLoading(true);
    setTimeout(() => {
      const out = reply(lang, { text, action: opts.action, arg: opts.arg }).map((x) => mk("assistant", x));
      setMessages((m) => [...m, ...out]);
      setLoading(false);
    }, 600);
  }

  function formDone(info) {
    const base = info.kind === "book"
      ? u.ok.book(info.name, fmtDate(info.date, lang), info.slot)
      : u.ok.quote(info.name);
    const content = info.emailed ? base : `${base}\n\n${u.okFail}`;
    setMessages((m) => [
      ...m.filter((x) => x.type !== "form"),
      mk("assistant", { type: "text", content, wa: info.wa, chips: ["services", "menu"] }),
    ]);
  }

  function changeLang(code) {
    if (code === lang || loading) return;
    setLang(code);
    write("vr_lang", code);
    setMessages([greeting(code)]);
  }

  const last = messages[messages.length - 1];
  const chips = !loading && last?.role === "assistant" ? last.chips : null;

  function renderMsg(m) {
    switch (m.type) {
      case "service":
        return <ServiceCard svc={serviceById(m.serviceId)} lang={lang}
          onQuote={(s) => send({ action: "quote", arg: s.id, label: `${u.chip.quote}: ${s.t[lang].title}` })}
          onBook={(s) => send({ action: "book", arg: s.id, label: `${u.chip.book}: ${s.t[lang].title}` })}
          onAll={() => send({ action: "services", label: u.chip.services })} />;
      case "services":
        return <ServiceGrid ids={m.ids} lang={lang} onPick={(s) => send({ action: "service", arg: s.id, label: s.t[lang].title })} />;
      case "process": return <Steps lang={lang} />;
      case "contact": return <ContactCard lang={lang} />;
      case "form": return <LeadForm kind={m.kind} service={m.service} lang={lang} onDone={formDone} />;
      case "guide":
        return (
          <div className="cw-grid one">
            {GUIDE.map((g) => <button key={g.key} onClick={() => send({ action: "guidepick", arg: g.key, label: g.t[lang] })}>{g.t[lang]}</button>)}
          </div>
        );
      case "faq":
        return (
          <div className="cw-grid one">
            {FAQS.map((f, i) => <button key={i} onClick={() => send({ action: "faq", arg: i, label: f[lang][0] })}>{f[lang][0]}</button>)}
          </div>
        );
      default: return null;
    }
  }

  return (
    <>
      {open && (
        <div className="cw-box" role="dialog" aria-label="Chat with VR Assistant">
          <div className="cw-head">
            <div className="cw-avatar">VR</div>
            <div className="cw-title">
              <strong>VR Assistant</strong>
              <span><i className="cw-dot" /> {u.online}</span>
            </div>
            <a href={`tel:+${PHONE}`} aria-label="Call" title="Call">📞</a>
            <a href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp">💬</a>
            <button onClick={() => setMessages([greeting(lang)])} aria-label="Restart" title="Restart">↻</button>
            <button onClick={() => setOpen(false)} aria-label="Close" title="Close">✕</button>
          </div>

          <div className="cw-lang" role="group" aria-label="Language">
            <span>🌐</span>
            {LANGS.map((l) => (
              <button key={l.code} className={l.code === lang ? "on" : ""} onClick={() => changeLang(l.code)}>{l.label}</button>
            ))}
          </div>

          <div className="cw-msgs" aria-live="polite">
            {messages.map((m) => {
              const extra = renderMsg(m);
              return (
                <div key={m.id} className={`cw-row ${m.role} ${extra ? "wide" : ""}`}>
                  {m.content && <div className={`cw-msg ${m.role}`}>{linkify(m.content)}</div>}
                  {extra}
                  {m.wa && <a className="cw-cbtn wa" href={m.wa} target="_blank" rel="noreferrer">💬 {u.waBtn}</a>}
                  {(m.content || m.type === "text") && <span className="cw-time">{timeStr(m.time)}</span>}
                </div>
              );
            })}

            {loading && (
              <div className="cw-row assistant">
                <div className="cw-msg assistant cw-typing"><span /><span /><span /></div>
              </div>
            )}

            {chips && (
              <div className="cw-chips">
                {chips.map((id) => (
                  <button key={id} onClick={() => send({ action: id, label: u.chip[id] })}>{u.chip[id]}</button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <div className="cw-input">
            <input
              ref={inputRef} value={input} maxLength={300}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send({ text: input })}
              placeholder={u.ph}
              aria-label="Type your message"
            />
            <button onClick={() => send({ text: input })} disabled={loading || !input.trim()} aria-label="Send">➤</button>
          </div>
        </div>
      )}

      {!open && teaser && (
        <div className="cw-teaser" onClick={openChat}>
          {u.teaser}
          <button aria-label="Dismiss" onClick={(e) => { e.stopPropagation(); setTeaser(false); write("vr_teaser", "1"); }}>✕</button>
        </div>
      )}

      <button className={`cw-fab ${open ? "" : "pulse"}`} onClick={() => (open ? setOpen(false) : openChat())}
        aria-label={open ? "Close chat" : "Open chat"}>
        {open ? "✕" : "💬"}
      </button>
    </>
  );
}
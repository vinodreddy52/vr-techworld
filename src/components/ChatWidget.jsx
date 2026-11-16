import { useState, useRef, useEffect } from "react";
import { SERVICES, STEPS, GUIDE, FAQS, UI, LANGS, SLOTS, CLOSED_DAYS, PHONE, WA, EMAIL } from "./botData";
import { reply, serviceById, MENU } from "./botBrain";
import { openTawk, pushLeadToTawk } from "./tawk";
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

/* ---------- Icons ---------- */
function WaIcon({ size = 20 }) {
  return (
    <svg className="cw-ico" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function MailIcon({ size = 20 }) {
  return (
    <svg className="cw-ico" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
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
      <a className="cw-cbtn wa" href={WA} target="_blank" rel="noreferrer"><WaIcon size={18} /> {u.wa}</a>
      <a className="cw-cbtn" href={`mailto:${EMAIL}`}>✉️ {EMAIL}</a>
    </div>
  );
}

function LiveCard({ lang, busy, onStart }) {
  const u = UI[lang];
  return (
    <div className="cw-card">
      <button type="button" className="cw-btn live" disabled={busy} onClick={onStart}>
        <span className="cw-live-dot" />
        <span>{busy ? u.liveWait : u.liveBtn}</span>
      </button>
    </div>
  );
}

/* ---------- Quote / Booking form (two send options: email or WhatsApp) ---------- */
function LeadForm({ kind, service, lang, onDone }) {
  const f = UI[lang].form;
  const isBook = kind === "book";
  const [v, setV] = useState({ name: "", phone: "", service: service || "", date: "", slot: "", notes: "" });
  const [err, setErr] = useState("");
  const [busy, setBusy] = useState(false);
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  const tomorrow = new Date(); tomorrow.setDate(tomorrow.getDate() + 1);
  const maxDay = new Date(); maxDay.setDate(maxDay.getDate() + 30);

  // Validates the form and builds the data both buttons need
  function prepare() {
    setErr("");
    const digits = v.phone.replace(/\D/g, "").slice(-10);
    if (v.name.trim().length < 2) { setErr(f.eName); return null; }
    if (digits.length !== 10) { setErr(f.ePhone); return null; }
    if (!v.service) { setErr(f.eService); return null; }
    if (isBook) {
      if (!v.date) { setErr(f.eDate); return null; }
      if (CLOSED_DAYS.includes(new Date(v.date + "T00:00:00").getDay())) { setErr(f.eClosed); return null; }
      if (!v.slot) { setErr(f.eSlot); return null; }
    }

    // Details are always in English so your team can read them easily
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
    return { data, waLink, typeLabel };
  }

  // Option 1: send by email (Formspree)
  async function sendEmail(e) {
    e.preventDefault();
    const p = prepare();
    if (!p) return;
    setBusy(true);
    // Also log the lead in Tawk.to (background, never blocks the email)
    pushLeadToTawk(p.data).catch(() => {});
    let emailed = true;
    try {
      const res = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `${p.typeLabel} from ${p.data.name} (website chat)`,
          ...p.data,
        }),
      });
      if (!res.ok) throw new Error("send failed");
    } catch (error) {
      console.error("Chat lead error:", error);
      emailed = false;
    }
    onDone({ kind, channel: "email", name: p.data.name, date: p.data.date, slot: p.data.slot, wa: p.waLink, emailed });
  }

  // Option 2: open WhatsApp with the details pre-filled
  function sendWhatsApp() {
    const p = prepare();
    if (!p) return;
    window.open(p.waLink, "_blank", "noopener");
    onDone({ kind, channel: "wa", name: p.data.name, date: p.data.date, slot: p.data.slot, wa: p.waLink, emailed: true });
  }

  return (
    <form className="cw-form" onSubmit={sendEmail}>
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

      <div className="cw-actions">
        <button type="submit" className="cw-btn email" disabled={busy}>
          <MailIcon />
          <span>{busy ? f.sending : f.sendEmail}</span>
        </button>
        <div className="cw-or"><span>{f.or}</span></div>
        <button type="button" className="cw-btn wa" disabled={busy} onClick={sendWhatsApp}>
          <WaIcon />
          <span>{f.sendWa}</span>
        </button>
      </div>
      <small className="cw-consent">{f.consent}</small>
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
  const [liveBusy, setLiveBusy] = useState(false);
  const [tawkOpen, setTawkOpen] = useState(false);
  const [messages, setMessages] = useState(() => loadMessages(lang));
  const endRef = useRef(null);
  const inputRef = useRef(null);
  const nextId = useRef(Date.now());
  const u = UI[lang];

  useEffect(() => { write(STORE, JSON.stringify(messages)); }, [messages]);

  // Hide our chat button while the Tawk.to window is open, so only one chat is ever visible
  useEffect(() => {
    const onTawk = (e) => setTawkOpen(e.detail === "open");
    window.addEventListener("vr-tawk", onTawk);
    return () => window.removeEventListener("vr-tawk", onTawk);
  }, []);

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
    let content;
    if (info.channel === "wa") {
      content = u.ok.wa(info.name);
    } else {
      const base = info.kind === "book"
        ? u.ok.book(info.name, fmtDate(info.date, lang), info.slot)
        : u.ok.quote(info.name);
      content = info.emailed ? base : `${base}\n\n${u.okFail}`;
    }
    setMessages((m) => [
      ...m.filter((x) => x.type !== "form"),
      mk("assistant", { type: "text", content, wa: info.wa, chips: ["services", "menu"] }),
    ]);
  }

  // Opens the Tawk.to live chat; shows a helpful message if it is blocked
  async function startLive() {
    if (liveBusy) return;
    setLiveBusy(true);
    try {
      await openTawk();
      setOpen(false);
    } catch (error) {
      console.error("Live chat error:", error);
      setMessages((m) => [
        ...m,
        mk("assistant", { type: "text", content: u.liveFail, wa: WA, chips: ["quote", "book", "menu"] }),
      ]);
    }
    setLiveBusy(false);
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
      case "live": return <LiveCard lang={lang} busy={liveBusy} onStart={startLive} />;
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
            <a href={WA} target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp"><WaIcon size={16} /></a>
            <button onClick={() => setMessages([greeting(lang)])} aria-label="Restart" title="Restart">↻</button>
            <button onClick={() => setOpen(false)} aria-label="Close" title="Close">✕</button>
          </div>

          <div className="cw-lang" role="group" aria-label="Language">
            <span>🌐</span>
            {LANGS.map((l) => (
              <button key={l.code} className={l.code === lang ? "on" : ""} onClick={() => changeLang(l.code)}>{l.label}</button>
            ))}
            <button type="button" className="cw-live-top" onClick={startLive} disabled={liveBusy} title={u.chip.live}>
              <span className="cw-live-dot" />
              <span>{liveBusy ? u.liveWait : u.liveShort}</span>
            </button>
          </div>

          <div className="cw-msgs" aria-live="polite">
            {messages.map((m) => {
              const extra = renderMsg(m);
              return (
                <div key={m.id} className={`cw-row ${m.role} ${extra ? "wide" : ""}`}>
                  {m.content && <div className={`cw-msg ${m.role}`}>{linkify(m.content)}</div>}
                  {extra}
                  {m.wa && (
                    <a className="cw-cbtn wa" href={m.wa} target="_blank" rel="noreferrer">
                      <WaIcon size={18} /> {u.waBtn}
                    </a>
                  )}
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
                  <button key={id} className={id === "live" ? "live" : ""} onClick={() => send({ action: id, label: u.chip[id] })}>{u.chip[id]}</button>
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

      {!open && teaser && !tawkOpen && (
        <div className="cw-teaser" onClick={openChat}>
          {u.teaser}
          <button aria-label="Dismiss" onClick={(e) => { e.stopPropagation(); setTeaser(false); write("vr_teaser", "1"); }}>✕</button>
        </div>
      )}

      {!tawkOpen && (
        <button className={`cw-fab ${open ? "" : "pulse"}`} onClick={() => (open ? setOpen(false) : openChat())}
          aria-label={open ? "Close chat" : "Open chat"}>
          {open ? "✕" : "💬"}
        </button>
      )}
    </>
  );
}

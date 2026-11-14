import { SERVICES, FAQS, GUIDE, UI } from "./botData";

export const serviceById = (id) => SERVICES.find((s) => s.id === id);
export const MENU = ["services", "guide", "book", "quote", "process", "pricing", "faqs", "contact"];

const AFTER = ["services", "quote", "book", "menu"];
const SVC_CHIPS = ["quote", "book", "services", "menu"];
const M = (type, content = "", extra = {}) => ({ type, content, ...extra });

// Keywords in English + Telugu + Hindi (matched whatever language is selected)
const KW = {
  menu: ["menu", "main menu", "start over", "restart", "back", "మెనూ", "मेन्यू", "मेनू"],
  hello: ["hi", "hello", "hey", "hii", "namaste", "hai", "good morning", "good evening", "హలో", "నమస్కారం", "నమస్తే", "हेलो", "हैलो", "नमस्ते", "हाय"],
  thanks: ["thanks", "thank you", "thx", "thank u", "ధన్యవాదాలు", "థాంక్స్", "धन्यवाद", "शुक्रिया", "थैंक्स"],
  book: ["book", "booking", "appointment", "consultation", "consult", "schedule", "meeting", "slot", "అపాయింట్", "కన్సల్టేషన్", "बुक", "अपॉइंटमेंट", "परामर्श", "कंसल्टेशन", "मीटिंग"],
  quote: ["quote", "get started", "start project", "enquiry", "enquire", "call me", "contact me", "కోట్", "कोटेशन", "कोट"],
  price: ["price", "pricing", "cost", "rate", "rates", "charges", "fees", "how much", "package", "packages", "ధర", "ఖర్చు", "రేటు", "कीमत", "भाव", "खर्च", "दाम", "शुल्क", "रेट"],
  timing: ["how long", "timeline", "turnaround", "delivery", "how many days", "how fast", "urgent", "ఎంత సమయం", "ఎన్ని రోజులు", "कितना समय", "कितने दिन", "कब तक"],
  process: ["process", "how it works", "how do you work", "steps", "procedure", "ప్రక్రియ", "ఎలా పని", "प्रक्रिया", "कैसे काम"],
  guide: ["not sure", "confused", "suggest", "recommend", "which service", "what do i need", "guide me", "help me choose", "తెలియదు", "సూచించ", "पता नहीं", "सुझाव", "क्या चाहिए"],
  faq: ["faq", "faqs", "questions", "ప్రశ్నలు", "सवाल", "प्रश्न"],
  docs: ["documents", "document", "papers", "required", "డాక్యుమెంట్", "పత్రాలు", "दस्तावेज़", "दस्तावेज", "कागज"],
  reg: ["registration", "register", "registered", "రిజిస్ట్రేషన్", "నమోదు", "रजिस्ट्रेशन", "पंजीकरण"],
  contact: ["contact", "phone", "call", "number", "email", "mail", "whatsapp", "address", "location", "office", "సంప్రదించ", "ఫోన్", "నంబర్", "చిరునామా", "संपर्क", "फोन", "फ़ोन", "नंबर", "पता"],
  services: ["services", "service", "what do you do", "what you offer", "offer", "all services", "సేవలు", "సర్వీసెస్", "सेवाएं", "सेवाएँ", "सर्विस"],
};

const norm = (s) =>
  " " + s.toLowerCase().replace(/[^\p{L}\p{M}\p{N}\s\u200c\u200d]/gu, " ").replace(/\s+/g, " ").trim() + " ";

const has = (t, words) =>
  words.some((w) =>
    /^[a-z0-9 ]+$/.test(w)
      ? t.includes(" " + w + " ") || (w.length > 4 && t.includes(w))
      : t.includes(w) // Telugu / Hindi: substring match
  );

function matchService(t) {
  let best = null, bestScore = 0;
  for (const s of SERVICES) {
    let score = 0;
    for (const k of s.keys) if (has(t, [k])) score += k.length;
    if (score > bestScore) { bestScore = score; best = s; }
  }
  return best;
}

export function reply(lang, { text = "", action, arg } = {}) {
  const u = UI[lang];
  const form = (kind, svc) => [
    M("text", kind === "book" ? u.bookIntro : u.quoteIntro),
    M("form", "", { kind, service: svc || "" }),
  ];

  // ----- Button actions -----
  switch (action) {
    case "menu": return [M("text", u.menuQ, { chips: MENU })];
    case "services":
      return [M("services", u.servicesQ, { ids: SERVICES.map((s) => s.id), chips: ["guide", "quote", "menu"] })];
    case "service": return [M("service", "", { serviceId: arg, chips: SVC_CHIPS })];
    case "guide": return [M("guide", u.guideQ)];
    case "guidepick": {
      const g = GUIDE.find((x) => x.key === arg);
      return [M("services", u.guideRes, { ids: g.ids, chips: ["quote", "book", "services", "menu"] })];
    }
    case "process": return [M("process", u.processQ, { chips: ["quote", "book", "menu"] })];
    case "pricing": return [M("text", FAQS[0][lang][1], { chips: ["quote", "book", "contact", "menu"] })];
    case "faqs": return [M("faq", u.faqQ)];
    case "faq": return [M("text", FAQS[arg][lang][1], { chips: AFTER })];
    case "quote": return form("quote", arg);
    case "book": return form("book", arg);
    case "contact": return [M("contact", u.contactQ, { chips: ["quote", "book", "menu"] })];
    default: break;
  }

  // ----- Typed text -----
  const t = norm(text);
  const words = t.trim().split(" ").length;

  if (has(t, KW.menu)) return [M("text", u.menuQ, { chips: MENU })];
  if (words <= 3 && has(t, KW.hello)) return [M("text", u.hello, { chips: MENU })];
  if (has(t, KW.thanks)) return [M("text", u.thanks, { chips: AFTER })];
  if (has(t, KW.book)) return form("book", matchService(t)?.id);
  if (has(t, KW.quote)) return form("quote", matchService(t)?.id);
  if (has(t, KW.price)) return [M("text", FAQS[0][lang][1], { chips: ["quote", "book", "contact", "menu"] })];
  if (has(t, KW.timing)) return [M("text", FAQS[1][lang][1], { chips: ["quote", "process", "menu"] })];
  if (has(t, KW.process)) return [M("process", u.processQ, { chips: ["quote", "book", "menu"] })];
  if (has(t, KW.guide)) return [M("guide", u.guideQ)];
  if (has(t, KW.faq)) return [M("faq", u.faqQ)];

  const svc = matchService(t);
  if (svc) return [M("service", "", { serviceId: svc.id, chips: SVC_CHIPS })];

  if (has(t, KW.docs)) return [M("text", FAQS[4][lang][1], { chips: ["services", "quote", "menu"] })];
  if (has(t, KW.reg))
    return [M("services", u.regQ, { ids: ["gst", "firm", "esipf"], chips: ["guide", "quote"] })];
  if (has(t, KW.contact)) return [M("contact", u.contactQ, { chips: ["quote", "book", "menu"] })];
  if (has(t, KW.services))
    return [M("services", u.servicesQ, { ids: SERVICES.map((s) => s.id), chips: ["guide", "quote", "menu"] })];

  return [M("text", u.fallback, { chips: MENU }), M("contact", "")];
}
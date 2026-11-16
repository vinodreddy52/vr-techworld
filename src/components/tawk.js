// Tawk.to runs behind our own chat widget: its bubble is always hidden, so visitors see ONE chat button.
//  - openTawk()        -> opens the live chat window when a visitor asks for a live agent
//  - pushLeadToTawk()  -> logs email leads (quote / consultation) in the Tawk.to dashboard
// Replace the ID below if your Tawk.to property / widget ID is different.
const TAWK_SRC = "https://embed.tawk.to/5e0843e027773e0d832b0ce7/default";

let loadingPromise = null;

const announce = (state) => {
  try { window.dispatchEvent(new CustomEvent("vr-tawk", { detail: state })); } catch (e) { /* ignore */ }
};

export function loadTawk() {
  if (loadingPromise) return loadingPromise;

  loadingPromise = new Promise((resolve, reject) => {
    window.Tawk_API = window.Tawk_API || {};
    window.Tawk_LoadStart = new Date();
    const api = window.Tawk_API;
    const hide = () => {
      try { api.hideWidget(); } catch (e) { /* ignore */ }
    };

    api.onBeforeLoad = hide;
    api.onLoad = () => { hide(); resolve(api); };
    api.onChatMaximized = () => announce("open");   // our button hides while Tawk is open
    api.onChatMinimized = () => { hide(); announce("closed"); };
    api.onChatEnded = () => { hide(); announce("closed"); };

    const s = document.createElement("script");
    s.async = true;
    s.src = TAWK_SRC;
    s.charset = "UTF-8";
    s.setAttribute("crossorigin", "*");
    s.onerror = () => {
      loadingPromise = null; // blocked (e.g. ad blocker); allow a retry later
      reject(new Error("Tawk.to could not be loaded"));
    };
    document.head.appendChild(s);

    setTimeout(() => reject(new Error("Tawk.to load timeout")), 8000);
  });

  return loadingPromise;
}

// Opens the Tawk.to live chat window
export async function openTawk() {
  const api = await loadTawk();
  api.showWidget();
  api.maximize();
  announce("open");
}

// Logs a quote request / consultation booking in Tawk.to (best effort, never blocks the email)
export async function pushLeadToTawk(lead) {
  const api = await loadTawk();

  try { api.setAttributes({ name: lead.name }, () => {}); } catch (e) { /* ignore */ }

  const meta = {};
  ["name", "phone", "service", "date", "slot", "notes", "language", "page"].forEach((k) => {
    if (lead[k]) meta[k] = String(lead[k]);
  });
  const eventName = lead.type === "Consultation booking" ? "consultation-booking" : "quote-request";
  try { api.addEvent(eventName, meta, () => {}); } catch (e) { /* ignore */ }
}

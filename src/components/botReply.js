const WA = "https://wa.me/919042238332";

const RULES = [
  { k: ["hi", "hello", "hey", "namaste", "hii"],
    a: "Hello! 👋 I can help with websites, logos, GST/MSME registration, marketing and more. What do you need?" },

  { k: ["website", "web design", "web site", "site"],
    a: "We build modern, mobile-friendly, SEO-ready websites with secure hosting. For a custom quote, message us here: " + WA },

  { k: ["logo", "brand", "branding"],
    a: "We design distinctive, high-resolution logos built around your brand and audience. Share your business name on WhatsApp: " + WA },

  { k: ["gst"],
    a: "We handle end-to-end GST registration with full compliance. Our team will confirm the exact documents for your business. Chat with us: " + WA },

  { k: ["llp", "firm", "company registration", "registration", "register"],
    a: "We do GST, LLP, firm and MSME registration. Exact requirements depend on your business, so our team will guide you. WhatsApp: " + WA },

  { k: ["msme", "udyam"],
    a: "MSME registration helps you unlock loans, exemptions and subsidies. We handle the whole setup. Contact us: " + WA },

  { k: ["income tax", "tds", "itr", "tax", "return"],
    a: "We file Income Tax and TDS returns for businesses and individuals. Message us to get started: " + WA },

  { k: ["esi", "pf", "labour", "labor", "payroll"],
    a: "We support ESI, PF and labour compliance so your payroll stays on track. Talk to our team: " + WA },

  { k: ["seo", "google ranking", "content", "rank"],
    a: "We offer keyword-focused SEO and content planning to help your site rank and bring better traffic. Details: " + WA },

  { k: ["ads", "facebook", "instagram", "google ads", "marketing", "social media", "campaign"],
    a: "We run targeted Facebook, Instagram and Google Ads campaigns to grow your reach and leads. Start here: " + WA },

  { k: ["ecommerce", "e-commerce", "shopify", "woocommerce", "online store", "payment gateway"],
    a: "We set up Shopify/WooCommerce stores with payment gateway integration and launch support. Chat with us: " + WA },

  { k: ["hosting", "maintenance", "backup", "domain"],
    a: "We provide managed hosting, security updates, backups and uptime monitoring for worry-free websites. Ask us: " + WA },

  { k: ["price", "cost", "rate", "charges", "fees", "how much", "quote", "package"],
    a: "Pricing plans are coming soon. Tell us what you need and we'll share a tailored quote. WhatsApp: " + WA },

  { k: ["contact", "phone", "call", "number", "email", "mail", "whatsapp", "address"],
    a: "📞 +91 90422 38332\n✉️ vrtechworld19@gmail.com\n💬 WhatsApp: " + WA },

  { k: ["services", "service", "what do you do", "offer", "help"],
    a: "Our services: Website Design & Hosting, Logo Design, Social Media & Google Ads, Income Tax & TDS, GST & LLP Registration, Firm & MSME Registration, ESI/PF/Labour Compliance, SEO, Maintenance, and E-commerce Setup. Which one do you need?" },

  { k: ["time", "how long", "days", "delivery", "timeline", "fast"],
    a: "We focus on fast turnaround. Timelines depend on the project, so our team will confirm after understanding your needs: " + WA },

  { k: ["thank", "thanks", "ok", "okay"],
    a: "You're welcome! 😊 Message us anytime on WhatsApp: " + WA },
];

export function botReply(text) {
  const t = " " + text.toLowerCase().replace(/[^a-z0-9\s-]/g, " ") + " ";
  let best = null, bestScore = 0;

  for (const rule of RULES) {
    let score = 0;
    for (const word of rule.k) {
      if (t.includes(" " + word + " ") || (word.length > 3 && t.includes(word))) {
        score += word.length;
      }
    }
    if (score > bestScore) { bestScore = score; best = rule; }
  }

  return best
    ? best.a
    : "I'm not sure about that, but our team can help! Call +91 90422 38332 or WhatsApp us: " + WA;
}


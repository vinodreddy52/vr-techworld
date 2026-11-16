// =====================================================================
//  SEO content for the individual service pages  (/services/<slug>)
//  Edit freely. Keep every page's text UNIQUE: Google ignores copied text.
// =====================================================================

export const BUSINESS = {
  name: "VR DIGITAL & CORPORATE HUB",
  shortName: "VR Digital",
  url: "https://vrdigitalcorporate.netlify.app", // change to your own domain later
  phone: "+91 90422 38332",
  phoneTel: "+919042238332",
  whatsapp: "https://wa.me/919042238332",
  email: "vrtechworld19@gmail.com",
  // Put the city / area you want to rank in, e.g. "Hyderabad". Leave "" to hide it.
  city: "",
};

const inCity = () => (BUSINESS.city ? ` in ${BUSINESS.city}` : "");

export const pageTitle = (page) => `${page.metaTitle}${inCity()} | ${BUSINESS.shortName}`;
export const pageUrl = (slug) => `${BUSINESS.url}/services/${slug}`;
export const pageH1 = (page) => `${page.h1}${inCity()}`;

export const SERVICE_PAGES = [
  {
    slug: "website-design-hosting",
    cardTitle: "Website Design & Hosting",
    short: "Website design & hosting",
    metaTitle: "Website Design & Hosting for Small Businesses",
    metaDescription:
      "Modern, mobile-friendly, SEO-ready websites with secure hosting for small businesses. Fast delivery, clear communication and support after launch.",
    h1: "Website Design & Hosting for Small Businesses",
    intro:
      "Your website is often the first thing a customer sees. We design modern, mobile-friendly websites that load quickly, explain your services clearly and make it easy for visitors to call, message or enquire. Every site is built with SEO basics in place and hosted securely so it stays fast and available.",
    includes: [
      "Responsive design that works on phones, tablets and desktops",
      "SEO-ready structure: clean page titles, headings and fast loading",
      "Contact forms and WhatsApp or call buttons so leads reach you directly",
      "Secure hosting with SSL for speed and uptime",
      "Launch testing and handover, with support after go-live",
    ],
    needs: [
      "Your business name and logo (if you have one)",
      "A list of your services or products",
      "Contact details and your business address",
      "Photos or content; we can guide you on what to prepare",
    ],
    faqs: [
      {
        q: "How long does it take to build a website?",
        a: "It depends on the number of pages and how quickly content is ready. We share a clear timeline with milestones in the project plan after the first consultation.",
      },
      {
        q: "Will my website show up on Google?",
        a: "We build every site with SEO basics so search engines can understand it. Ranking also depends on competition, content and time, and no one can honestly guarantee a position.",
      },
      {
        q: "Can I update the website myself later?",
        a: "Yes, we can set it up so simple changes are easy, and we also offer maintenance if you prefer us to handle updates.",
      },
    ],
  },
  {
    slug: "logo-design",
    cardTitle: "Logo Design",
    short: "Logo design",
    metaTitle: "Logo Design & Brand Identity for Your Business",
    metaDescription:
      "Distinctive, high-resolution logos shaped around your brand identity and audience, with colour palettes and files ready for web and print.",
    h1: "Logo Design & Brand Identity",
    intro:
      "A good logo makes your business easy to recognise and trust. We design distinctive logos around your brand, your customers and the way you want to be seen, then deliver the files you need for your website, social media, signboards and printing.",
    includes: [
      "Custom logo concepts based on your business and audience",
      "Refinement of the concept you choose",
      "Colour palette and style guidance so your brand looks consistent",
      "High-resolution files for web and print",
    ],
    needs: [
      "Your business name and tagline",
      "Preferred colours or styles (and ones you dislike)",
      "A short description of your customers and what makes you different",
    ],
    faqs: [
      {
        q: "Can you redesign my existing logo?",
        a: "Yes. Share your current logo and what you want to improve, and we will refresh it while keeping what customers already recognise.",
      },
      {
        q: "Which files will I receive?",
        a: "You receive high-resolution files suitable for websites, social media and print. We confirm the exact file formats in your quote.",
      },
      {
        q: "Can the logo be used on my website and social pages?",
        a: "Yes. We prepare versions that work on light and dark backgrounds and for profile pictures.",
      },
    ],
  },
  {
    slug: "social-media-google-ads",
    cardTitle: "Social Media & Google Ads",
    short: "Social media & Google Ads",
    metaTitle: "Social Media & Google Ads Management",
    metaDescription:
      "Targeted Facebook, Instagram and Google Ads campaigns that grow reach and enquiries, with creative, conversion tracking and clear reporting.",
    h1: "Social Media & Google Ads Management",
    intro:
      "Paid campaigns put your offer in front of people who are already looking for what you sell. We plan, set up and manage Facebook, Instagram and Google Ads campaigns with a clear goal, whether that is calls, WhatsApp enquiries or online sales, and track what actually brings in leads.",
    includes: [
      "Campaign strategy based on your goal, audience and location",
      "Ad creative and copy for Facebook, Instagram and Google",
      "Conversion tracking so you can see calls, forms and messages",
      "Ongoing optimisation and simple reporting",
    ],
    needs: [
      "What you sell and who your ideal customer is",
      "Your target area or audience",
      "Your goal: calls, enquiries or sales",
      "A rough monthly budget idea",
    ],
    faqs: [
      {
        q: "How much should I spend on ads?",
        a: "It depends on your goal, competition and location. We explain how the ad budget and our fees work in your quote, and recommend a sensible starting point.",
      },
      {
        q: "How soon will I get leads?",
        a: "Ads can start delivering traffic soon after launch, but results improve as we test and optimise. We will set realistic expectations after reviewing your business.",
      },
      {
        q: "Do I need a website for ads?",
        a: "A website or landing page helps a lot because it gives visitors a place to learn and enquire. We can build one for you if you do not have it.",
      },
    ],
  },
  {
    slug: "income-tax-tds-return",
    cardTitle: "Income Tax & TDS Return",
    short: "Income tax & TDS return",
    metaTitle: "Income Tax & TDS Return Filing Support",
    metaDescription:
      "Accurate income tax and TDS return filing and compliance support for businesses and individuals, with document preparation and timely submission.",
    h1: "Income Tax & TDS Return Filing Support",
    intro:
      "Filing on time and correctly helps you avoid notices and penalties. We support businesses and individuals with income tax and TDS return filing, from preparing your documents to submitting the return and guiding you on what to keep for the future.",
    includes: [
      "Income tax return filing for individuals and businesses",
      "TDS return support",
      "Document checking and preparation",
      "Guidance on due dates and records to maintain",
    ],
    needs: [
      "PAN and Aadhaar",
      "Income details and bank statements",
      "Previous returns, if any",
      "Business records, for business filings",
    ],
    faqs: [
      {
        q: "Which documents do I need to file my return?",
        a: "Usually PAN, Aadhaar, income details, bank statements and investment or expense proofs. The exact list depends on your income type, and our team confirms it for you.",
      },
      {
        q: "Can you help if I missed a deadline?",
        a: "Contact us as soon as possible. We will review your situation and explain the options available.",
      },
      {
        q: "Do you handle returns for small businesses?",
        a: "Yes. We support proprietors, firms and small companies with their income tax and TDS compliance.",
      },
    ],
  },
  {
    slug: "gst-llp-registration",
    cardTitle: "GST & LLP Registration",
    short: "GST & LLP registration",
    metaTitle: "GST & LLP Registration Services",
    metaDescription:
      "End-to-end GST and LLP registration for new and growing businesses. We handle the paperwork and follow-up so you can focus on your business.",
    h1: "GST & LLP Registration Services",
    intro:
      "Registering your business correctly is the foundation for invoicing, banking and growth. We handle GST and LLP registration from application to certificate, managing the paperwork and follow-up with the authorities so you do not lose time on avoidable mistakes.",
    includes: [
      "GST registration support, from application to certificate",
      "LLP registration and documentation support",
      "Checking your documents before filing to reduce delays",
      "Guidance on what to do after registration",
    ],
    needs: [
      "PAN and Aadhaar of the owner or partners",
      "Business address proof",
      "Bank account details",
      "Passport-size photographs",
      "For an LLP: details of the partners",
    ],
    faqs: [
      {
        q: "Do I need GST registration for my business?",
        a: "It depends on your business type, turnover and state, and the rules can change. Our team will review your situation and confirm whether registration is required for you.",
      },
      {
        q: "What documents are needed for GST registration?",
        a: "Usually PAN, Aadhaar, address proof, bank account details and photographs. We confirm the exact list for your business.",
      },
      {
        q: "How long does registration take?",
        a: "It depends on the type of registration and how quickly documents are ready. We share an expected timeline once we review your case.",
      },
    ],
  },
  {
    slug: "firm-msme-registration",
    cardTitle: "Firm & MSME Registration",
    short: "Firm & MSME registration",
    metaTitle: "Firm & MSME (Udyam) Registration Services",
    metaDescription:
      "Legal setup for firms and MSMEs so you can unlock loans, exemptions and subsidies. We manage documentation and government filings for you.",
    h1: "Firm & MSME Registration Services",
    intro:
      "Registering your firm and your MSME status gives your business a proper legal footing and can open doors to loans, subsidies and other benefits. We handle the documentation and government filings for startups, partnerships and small businesses so the setup is clean from day one.",
    includes: [
      "Firm registration support for partnerships and small businesses",
      "MSME (Udyam) registration support",
      "Documentation and government filings handled for you",
      "Guidance on the next steps after registration",
    ],
    needs: [
      "PAN and Aadhaar of the owner or partners",
      "Business address proof",
      "Bank account details",
      "A description of your business activity",
    ],
    faqs: [
      {
        q: "What are the benefits of MSME registration?",
        a: "Registered MSMEs can access schemes such as loans, subsidies and other exemptions. The benefits available depend on current government schemes, so our team will explain what applies to you.",
      },
      {
        q: "Which business type should I choose?",
        a: "It depends on how many owners you have, your plans and your risk preferences. We explain the options in your consultation so you can decide with confidence.",
      },
      {
        q: "Can you register a new startup?",
        a: "Yes. We help new businesses choose a structure and complete the registrations they need to start operating properly.",
      },
    ],
  },
  {
    slug: "esi-pf-labour-compliance",
    cardTitle: "ESI, PF & Labour Compliance",
    short: "ESI, PF & labour compliance",
    metaTitle: "ESI, PF & Labour Compliance Support",
    metaDescription:
      "Payroll-ready support for ESI, PF and labour compliance, with registration help, contribution tracking and timely reporting for your team.",
    h1: "ESI, PF & Labour Compliance Support",
    intro:
      "Once you have employees, regular compliance becomes part of running the business. We support ESI, PF and labour formalities so contributions, registrations and reports are handled on time, and you can pay and manage your team with confidence.",
    includes: [
      "ESI and PF registration support",
      "Employee enrolment and records",
      "Contribution tracking and reporting support",
      "Guidance on labour formalities your business needs",
    ],
    needs: [
      "Employer PAN and business details",
      "Employee list with salary details",
      "Bank details",
      "Existing registrations, if any",
    ],
    faqs: [
      {
        q: "When does a business need ESI and PF?",
        a: "It depends on the number of employees and their wages, and the rules can change. Our team checks your situation and confirms what applies to your business.",
      },
      {
        q: "Can you manage monthly filings?",
        a: "Yes. We can support ongoing contribution tracking and reporting so deadlines are not missed.",
      },
      {
        q: "Do you help with a new registration?",
        a: "Yes. We guide you through registration and set up your records so you are payroll-ready.",
      },
    ],
  },
  {
    slug: "seo-content-strategy",
    cardTitle: "SEO & Content Strategy",
    short: "SEO & content strategy",
    metaTitle: "SEO & Content Strategy Services",
    metaDescription:
      "Keyword-focused SEO and content planning that helps your website rank and attract better traffic, with on-page SEO, local search and clear reporting.",
    h1: "SEO & Content Strategy Services",
    intro:
      "SEO helps customers find you when they search on Google. We combine keyword research, on-page improvements and content planning, plus local search setup, so your website becomes easier to find and more useful to the people who visit it.",
    includes: [
      "Keyword research for the services your customers search for",
      "On-page SEO: titles, descriptions, headings and page structure",
      "Content planning and content audits",
      "Local search setup, including your Google Business Profile",
      "Simple reporting on traffic and enquiries",
    ],
    needs: [
      "Your website link",
      "Your services and target locations",
      "Your main competitors, if you know them",
    ],
    faqs: [
      {
        q: "Can you guarantee a first-page ranking?",
        a: "No honest SEO provider can guarantee a position, because Google decides rankings. We focus on the work that improves visibility over time and report progress clearly.",
      },
      {
        q: "How long does SEO take to show results?",
        a: "SEO usually takes weeks to months, depending on your competition and how new your site is.",
      },
      {
        q: "Do you also write the content?",
        a: "We can plan and help create content that targets what your customers search for, so your pages answer their questions.",
      },
    ],
  },
  {
    slug: "website-maintenance-hosting",
    cardTitle: "Maintenance & Hosting",
    short: "Website maintenance & hosting",
    metaTitle: "Website Maintenance & Managed Hosting",
    metaDescription:
      "Managed hosting, security updates, backups and uptime monitoring so your website stays fast, secure and online without the stress.",
    h1: "Website Maintenance & Managed Hosting",
    intro:
      "A website needs regular care to stay fast, secure and online. Our maintenance and hosting plans take care of the technical side: backups, security updates, SSL and uptime monitoring, so you can focus on running your business.",
    includes: [
      "Managed hosting with SSL",
      "Regular backups",
      "Security updates",
      "Uptime monitoring and performance tuning",
    ],
    needs: [
      "Your website link",
      "Current hosting and domain details, if you have them",
    ],
    faqs: [
      {
        q: "Can you take over maintenance of my existing website?",
        a: "In most cases yes. Share your website link and hosting details, and we will review it and confirm.",
      },
      {
        q: "What happens if my website goes down?",
        a: "We monitor uptime so problems can be noticed quickly, and we work to restore the site as soon as possible.",
      },
      {
        q: "Do you also help with the domain name?",
        a: "Yes. We can guide you on domain registration and renewals along with your hosting.",
      },
    ],
  },
  {
    slug: "ecommerce-setup-payments",
    cardTitle: "E-commerce Setup & Payments",
    short: "E-commerce setup & payments",
    metaTitle: "E-commerce Store Setup & Payment Integration",
    metaDescription:
      "Shopify and WooCommerce store setup with payment gateway integration and product launch support, so you can start selling online smoothly.",
    h1: "E-commerce Store Setup & Payment Integration",
    intro:
      "Selling online needs more than a product page. We set up your Shopify or WooCommerce store, configure checkout and payments, and help you launch your first products so customers can browse, pay and order without friction.",
    includes: [
      "Shopify or WooCommerce store setup",
      "Payment gateway integration",
      "Checkout flow configuration",
      "Product upload and launch support",
    ],
    needs: [
      "Your product list and photos",
      "Your preferred platform, or we can advise you",
      "Business and bank details needed to accept payments",
    ],
    faqs: [
      {
        q: "Should I choose Shopify or WooCommerce?",
        a: "It depends on your products, budget and how much control you want. We explain the differences and recommend what suits your business.",
      },
      {
        q: "Can you add online payments to my store?",
        a: "Yes. We integrate a payment gateway and test the checkout before you go live.",
      },
      {
        q: "Will you help me add my products?",
        a: "Yes. We can set up your product catalogue and help you prepare for launch.",
      },
    ],
  },
];

export const SLUG_BY_TITLE = Object.fromEntries(SERVICE_PAGES.map((p) => [p.cardTitle, p.slug]));

// Visible FAQ for the home page (real text on the page helps Google understand your business)

export const HOME_FAQS = [
  {
    q: "What services does VR DIGITAL & CORPORATE HUB offer?",
    a: "We offer website design and development, website hosting, logo and branding design, SEO, digital marketing, GST registration, GST filing support, MSME registration, ITR and TDS assistance, and business compliance services."
  },
  {
    q: "Do you develop responsive websites for mobile devices?",
    a: "Yes. We develop responsive websites that work across desktops, laptops, tablets and smartphones. Our focus is on modern UI design, user experience, performance and mobile compatibility."
  },
  {
    q: "How much does website development cost?",
    a: "Website development pricing depends on the number of pages, design requirements, functionality, integrations and overall project complexity. Contact us with your requirements to receive a customized quotation."
  },
  {
    q: "Do you provide domain registration and website hosting?",
    a: "Yes. We assist with domain registration, hosting setup, website deployment, SSL configuration and basic website maintenance based on your requirements."
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We can redesign existing websites with modern layouts, responsive interfaces, improved navigation, better performance and an enhanced user experience."
  },
  {
    q: "Do you provide logo design and branding services?",
    a: "Yes. We provide logo design and branding solutions to help businesses establish a professional identity. We can also assist with business cards and other digital branding materials."
  },
  {
    q: "Do you provide SEO and digital marketing services?",
    a: "Yes. We provide SEO support, on-page optimization, website content improvements, social media marketing assistance and digital advertising solutions to improve your online visibility."
  },
  {
    q: "What is MSME or Udyam registration?",
    a: "Udyam registration is a government registration for eligible micro, small and medium enterprises in India. We assist businesses with the registration process and documentation requirements."
  },
  {
    q: "Can you help with GST registration?",
    a: "Yes. We assist businesses with GST registration, documentation preparation and application support based on applicable government requirements."
  },
  {
    q: "Do you provide GST return filing services?",
    a: "We provide GST return filing assistance and related compliance support. The applicable return type and filing requirements depend on your business registration and tax obligations."
  },
  {
    q: "Do you assist with Income Tax Return (ITR) filing?",
    a: "Yes. We provide ITR filing assistance for eligible individuals and businesses. The documents required depend on income sources and applicable tax rules."
  },
  {
    q: "Do you provide TDS filing assistance?",
    a: "Yes. We assist with TDS-related compliance, return filing preparation and documentation based on applicable requirements."
  },
  {
    q: "Can startups and small businesses use your services?",
    a: "Absolutely. We support startups, freelancers, entrepreneurs, small businesses and established organizations with digital solutions and business support services."
  },
  {
    q: "How can I request a quotation?",
    a: "You can contact us through our website contact form, WhatsApp or email. Share your project or business requirements, and our team will get back to you with the next steps."
  },
  {
    q: "How can I contact VR DIGITAL & CORPORATE HUB?",
    a: "You can reach us by phone or WhatsApp at +91 90422 38332 or email vrtechworld19@gmail.com. You can also submit your requirements through our Contact Us page."
  }
];


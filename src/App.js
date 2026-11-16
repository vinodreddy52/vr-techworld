import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ThemeContext from "./ThemeContext";

// Loaded immediately (above-the-fold content that Google and visitors see first)
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// Lazy-loaded (below the fold / other pages)
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTopButton = lazy(() => import("./components/ScrollToTopButton"));
const ChatWidget = lazy(() => import("./components/ChatWidget"));
const WidgetBoundary = lazy(() => import("./components/WidgetBoundary"));

const Service = lazy(() => import("./pages/Service"));
//const ServiceDetail = lazy(() => import("./pages/Service"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const About = lazy(() => import("./pages/About"));
const FAQ = lazy(() => import("./pages/FAQ"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Start every page at the top when the visitor navigates
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const RouteChangeTracker = ({ consentStatus }) => {
  useEffect(() => {
    if (consentStatus === "accepted") {
      //initGA();
    }
  }, [consentStatus]);

  useEffect(() => {
    if (consentStatus === "accepted") {
      //trackPageView(location.pathname + location.search);
    }
  }, [consentStatus]);

  return null;
};

const App = () => {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
    } catch (e) {}
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <HelmetProvider>
        <Router>
          <ScrollToTop />
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <RouteChangeTracker />

          <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              {/* <Route path="/service/:slug" element={<ServiceDetail />} /> */}
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>

          <Suspense fallback={null}>
            <WidgetBoundary>
              <ChatWidget />
            </WidgetBoundary>
            <ScrollToTopButton />
            <Footer />
          </Suspense>
        </Router>
      </HelmetProvider>
    </ThemeContext.Provider>
  );
};

export default App;

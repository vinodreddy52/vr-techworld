import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes,  } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ThemeContext from "./ThemeContext";
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const ScrollToTopButton = lazy(() => import("./components/ScrollToTopButton"));
const LazyTawk = lazy(() => import('./components/LazyTawk'));
//import FlashNews from "./components/FlashNews";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Service = lazy(() => import("./pages/Service"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const About = lazy(() => import("./pages/About"));

const RouteChangeTracker = ({ consentStatus }) => {
 // const location = useLocation();

  useEffect(() => {
    if (consentStatus === "accepted") {
      //initGA();
    }
  }, [consentStatus]);

  useEffect(() => {
    if (consentStatus === "accepted") {
      //trackPageView(location.pathname + location.search);
    }
  }, [ consentStatus]);

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

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")) }}>
      <HelmetProvider>
        <Router>
          <Suspense fallback={<div />}> 
            <Navbar theme={theme} toggleTheme={() => setTheme((t) => (t === "light" ? "dark" : "light"))} />
          </Suspense>
          <RouteChangeTracker />

          <Suspense fallback={<div>Loading...</div>}>
            {/* <FlashNews /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Service />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </Suspense>

          <Suspense fallback={null}>
            <LazyTawk />
            <ScrollToTopButton />
            <Footer />
          </Suspense>
        </Router>
      </HelmetProvider>
    </ThemeContext.Provider>
  );
};

export default App;

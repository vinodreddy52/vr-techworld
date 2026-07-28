import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import TawkToChat from './components/ChatWidget';
import ThemeContext from "./ThemeContext";
//import FlashNews from "./components/FlashNews";
// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Service = lazy(() => import("./pages/Service"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));

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
      <Router>
        <Navbar theme={theme} toggleTheme={() => setTheme((t) => (t === "light" ? "dark" : "light"))} />
      
      <Suspense fallback={<div>Loading...</div>}>
      {/* <FlashNews /> */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* ✅ FIXED: Home Route */}
          <Route path="/service" element={<Service />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </Suspense>
      <TawkToChat /> 
      <ScrollToTopButton />
      <Footer />
      </Router>
    </ThemeContext.Provider>
  );
};

export default App;

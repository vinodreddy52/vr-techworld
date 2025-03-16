import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";  // Corrected Navbar path
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

// Lazy load pages from the correct directory
const Home = lazy(() => import("./pages/Home"));
const Service = lazy(() => import("./pages/Service"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Contact = lazy(() => import("./pages/Contact"));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <ScrollToTopButton />
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;

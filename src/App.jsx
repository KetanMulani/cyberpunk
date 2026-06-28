import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import HeroSection from "./pages/HeroSection";
import GreetSection from "./pages/GreetSection";
import UnveilSection from "./pages/UnveilSection";
import DiveSection from "./pages/DiveSection";
import BlogSection from "./pages/BlogSection";
import AboutUs from "./pages/AboutUs";

import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Cookies from "./components/Cookies";
import PrivacyPolicy from "./components/PrivacyPolicy";

function Home() {
  const [showCookies, setShowCookies] = useState(false);

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <HeroSection />
      <GreetSection />
      <UnveilSection />
      <DiveSection />
      <FAQ />
      <Footer setShowCookies={setShowCookies} />
      <Cookies show={showCookies} setShow={setShowCookies} />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
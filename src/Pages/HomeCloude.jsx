import { useEffect } from "react";

import DownArrow from "../components/DownArrow";
import ContactSection from "../components/Home/ContactSection";
import WhyUs from "../components/Service/WhyUs";
import Services from "../components/Home/Services";
import About from "../components/Home/About";
import NewsAndUpdate from "../components/Home/NewsAndUpdate";
import StatsSection from "../components/Home/StatsSection";
import HeroSection from "../components/Home/HeroSection";

const Homepage = () => {
  useEffect(() => {
    scrollTo(0, 0);
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <DownArrow />

      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <Services />

      {/* Why Choose Us Section */}
      <WhyUs />

      {/* News & Updates Section */}
      <NewsAndUpdate />

      {/* Contact CTA Section */}
      <ContactSection />
    </div>
  );
};

export default Homepage;

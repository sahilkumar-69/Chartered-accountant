import { useEffect } from "react";

import DownArrow from "../components/DownArrow";
import CtaService from "../components/Service/CtaService";
import WhyUs from "../components/Service/WhyUs";
import IndustryServed from "../components/Service/IndustryServed";
import ServiceCard from "../components/Service/ServiceCard";
import HeroServicePage from "../components/Service/HeroServicePage";

const ServicesPage = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <DownArrow />

      <HeroServicePage />

      {/* Services Grid */}
      <ServiceCard />

      {/* Industries Served */}
      <IndustryServed />

      {/* Why Choose Us */}
      <WhyUs />

      {/* CTA Section */}
      <CtaService />
    </div>
  );
};

export default ServicesPage;

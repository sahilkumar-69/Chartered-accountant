import { useEffect } from "react";

import IndustrySectorCard from "../components/AboutUs/IndustrySectorCard";
import OfficesCard from "../components/AboutUs/OfficesCard";
import DownArrow from "../components/DownArrow";
import CoreValue from "../components/AboutUs/CoreValue";
import WhoWeAre from "../components/AboutUs/WhoWeAre";
import ServiceAreas from "../components/AboutUs/ServiceAreas";
import MissionAndVision from "../components/AboutUs/MissionAndVision";
import HeroSection from "../components/AboutUs/HeroSection";

const AboutPage = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <DownArrow />

      <HeroSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission & Vision */}
        <MissionAndVision />

        {/* Who We Are */}
        <WhoWeAre />

        {/* Our core value  */}
        <CoreValue />

        {/* Our Offices */}
        <OfficesCard />

        {/* Services */}
        {/* <Services services={services} /> */}

        {/* Industry Sectors */}
        <IndustrySectorCard />

        {/* Service Areas */}
        <ServiceAreas />
      </div>
    </div>
  );
};

export default AboutPage;

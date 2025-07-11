import React, { useEffect } from "react";
import {
  CheckCircle,
  Users,
  Target,
  Award,
  MapPin,
  Building2,
  Globe,
} from "lucide-react";
import Services from "../components/Services";
import IndustrySectorCard from "../components/IndustrySectorCard";
import OfficesCard from "../components/OfficesCard";
import DownArrow from "../components/DownArrow";

const AboutPage = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const services = [
    "Assurance Services",
    "Accounting & Payroll Outsourcing Services",
    "Business Tax Planning and Financial Planning Services",
    "Company Formation and Business Setup Services",
    "Project Financing & PE Funding Services",
  ];

  const sectors = [
    "Software and Information Technology",
    "Engineering",
    "Traveling & Hospitality",
    "Education",
    "Financial Services and Banking",
    "Non-Government Organisation (NGO)",
  ];

  const cities = [
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Ghaziabad",
    "Ludhiana",
    "Agra",
    "Faridabad",
    "Meerut",
    "Varanasi",
    "Amritsar",
    "Allahabad",
    "Jodhpur",
    "Chandigarh",
    "Kota",
    "Bareilly",
    "Moradabad",
    "Aligarh",
    "Jalandhar",
    "Saharanpur",
    "Gorakhpur",
    "Bikaner",
    "Firozabad",
    "Dehradun",
    "Ajmer",
    "Loni",
    "Jhansi",
    "Jammu",
  ];

  const offices = [
    {
      link: "https://www.google.com/maps?q=28.6296148,77.1459466",
      name: "Delhi",
      primary: false,
    },
    {
      link: "https://www.google.com/maps?q=28.5355,77.3910",
      name: "Noida",
      primary: false,
    },
    {
      link: "https://www.google.com/maps?q=28.5355,77.3910",
      name: "Gurgaon (Gurugram)",
      primary: false,
    },
    {
      link: "https://www.google.com/maps?q=28.5355,77.3910",
      name: "Greater Noida",
      primary: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <DownArrow />

      <div
        style={{
          backgroundImage: "url('src/assets/about (2).jpg')",
        }}
        className="bg-no-repeat bg-cover  h-[80svh] from-blue-900 to-indigo-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About NEXUS CA Firm
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              {/* Professionally managed Chartered Accountants in Delhi with over
              two decades of industry experience <br /> */}
              Founded with a vision to redefine the accounting experience,
              DevNexus is a dynamic CA firm built on values of integrity,
              accuracy, and transparency. We combine the power of traditional
              knowledge with modern tools and technology to deliver solutions
              that are not just efficient, but future-ready.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl   p-8 border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Aim</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To be the No.1 Indian Chartered Accountant firm by delivering
              quality solutions in professional and time-bound manner.
            </p>
          </div>

          <div className="bg-white rounded-xl   p-8 border-l-4 border-indigo-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Award className="h-8 w-8 text-indigo-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              To achieve "Total Customer Satisfaction" by delivering quality
              services in professional and time-bound manner.
            </p>
          </div>
        </div>

        {/* Who We Are */}
        <div className="bg-white rounded-xl  p-8 mb-16">
          <div className="flex items-center mb-6">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
          </div>
          <div className="prose max-w-none text-gray-700 leading-relaxed">
            <p className="mb-6">
              NEXUS is a professionally managed Chartered Accountants firm
              established by Indian chartered accountants having over two
              decades of industry experience. We have a proven track record of
              providing high-quality services to clients across India from our
              offices in Delhi, Noida, Gurgaon (Gurugram), and Greater Noida.
            </p>
            <p className="mb-6">
              We offer end-to-end solutions in a wide spectrum of services,
              providing comprehensive financial and business solutions to meet
              all your professional needs.
            </p>
            <p>
              We are catering to Indian and Multinational Corporate, Banking and
              Financial Institutions, Start-ups, High net-worth individuals,
              executives and expatriates across various industry sectors.
            </p>
          </div>
        </div>

        {/* Our Offices */}
        <OfficesCard offices={offices} />

        {/* Services */}
        <Services services={services} />

        {/* Industry Sectors */}
        <IndustrySectorCard sectors={sectors} />

        {/* Service Areas */}
        <div className="bg-white rounded-xl p-8">
          <div className="flex items-center mb-6">
            <MapPin className="h-8 w-8 text-orange-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-900">
              Cities We Serve
            </h2>
          </div>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We are providing services to clients across major cities in India,
            ensuring comprehensive coverage and accessibility:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {cities.map((city, index) => (
              <div
                key={index}
                className="p-3 bg-orange-50 rounded-lg border border-orange-200 text-center"
              >
                <p className="text-gray-800 font-medium text-sm">{city}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 mt-6 text-center italic">
            ...and many more cities across India
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

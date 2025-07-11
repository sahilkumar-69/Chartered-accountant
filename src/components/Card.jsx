import React from "react";

const services = [
  {
    title: "Audit & Assurance",
    img: "https://www.vyomgroup.com/public/images/products/1721490465-real-estate-company.jpg",
    description: `Auditing & Assurance Services are at the core of any Financial Management setup. It ensures proper working of the organisation according to laid down internal controls and also the efficiency and effectiveness of the controls itself.
    
At NEXUS, we offer a complete range of Assurance Solutions to help improve your financial efficiency, accuracy and stability.`,
  },
  {
    title: "Income Tax Services",
    img: "https://www.vyomgroup.com/public/images/products/1721490465-real-estate-company.jpg",
    description: `NEXUS specialise in providing Time-bound and quality Income Tax services to our clients. Our range of Direct Tax services cover all aspects of Indian Income Tax Laws and help our clients to minimise their tax liability.
    
We provide Income Tax Management & Advisory Services, Income Tax Representation, Appeals, Search & Seizure, International Transfer Pricing, Tax Compliance Services.`,
  },
  {
    title: "GST Services India",
    img: "https://www.vyomgroup.com/public/images/products/1721490465-real-estate-company.jpg",
    description: `GST (Goods & Service Tax) is a recently introduced concept which merges most indirect taxes under one umbrella tax.
    
GST is a welcome step towards reducing compliances and for improving ease of doing business.
    
We provide GST Advisory, Representation, Appeals, Registration and GST Compliance Services.`,
  },
];

const ServiceCard = () => {
  return (
    <div className=" bg-gray-50 max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-md overflow-hidden p-4 hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={service.img}
            alt={service.title}
            className="w-full h-48 object-cover rounded"
          />
          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
            {service.title}
          </h3>
          <p className="text-gray-600 text-sm whitespace-pre-line mb-4">
            {service.description}
          </p>
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline transition-all"
          >
            Learn More
          </a>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;

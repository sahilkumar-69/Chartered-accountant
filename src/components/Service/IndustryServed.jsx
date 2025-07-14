import { IndustryServedIndustries } from "../../Store/Data.js";

const IndustryServed = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h3>
          <p className="text-xl text-gray-600">
            Our expertise spans across diverse sectors and business verticals
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {IndustryServedIndustries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-lg font-semibold text-gray-800">
                {industry}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryServed;

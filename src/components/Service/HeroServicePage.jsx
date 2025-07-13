import CountUp from "react-countup";
import { servicePageStats } from "../../Store/Data.js";

const HeroServicePage = () => {
  return (
    <section
      style={{
        backgroundImage:
          'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeIimd9DTv-ljwgi589yrfVNshxl2P4w6Gog&s")',
      }}
      className="relative bg-no-repeat  bg-center bg-cover h-[80svh] py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Our Professional
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            CA Services
          </span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
          Full-service chartered accountancy solutions with over two decades of
          expertise across diverse industries and regulatory compliance.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {servicePageStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
            >
              <div className="text-3xl font-bold text-yellow-400">
                <CountUp
                  start={0}
                  end={stat.end}
                  duration={2.5}
                  suffix={stat.suffix || ""}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroServicePage;

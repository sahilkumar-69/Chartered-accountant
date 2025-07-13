import CountUp from "react-countup";
import { homePagestats } from "../../Store/Data.js";

const StatsSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {homePagestats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                <CountUp
                  start={0}
                  end={stat.end}
                  duration={2.5}
                  suffix={stat.suffix || ""}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;

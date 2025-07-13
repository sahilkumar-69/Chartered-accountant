import { Award, Target } from "lucide-react";

const MissionAndVision = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16">
      <div className="bg-white rounded-xl   p-8 border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
        <div className="flex items-center mb-6">
          <Target className="h-8 w-8 text-blue-500 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">Our Aim</h2>
        </div>
        <p className="text-gray-700 leading-relaxed">
          To be the No.1 Indian Chartered Accountant firm by delivering quality
          solutions in professional and time-bound manner.
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
  );
};

export default MissionAndVision;

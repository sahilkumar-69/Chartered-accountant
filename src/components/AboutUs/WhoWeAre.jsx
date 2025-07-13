import { Users } from "lucide-react";

const WhoWeAre = () => {
  return (
    <div className="bg-white rounded-xl  p-8 mb-16">
      <div className="flex items-center mb-6">
        <Users className="h-8 w-8 text-blue-600 mr-3" />
        <h2 className="text-3xl font-bold text-gray-900">Who We Are</h2>
      </div>
      <div className="prose max-w-none text-gray-700 leading-relaxed">
        <p className="mb-6">
          NEXUS is a professionally managed Chartered Accountants firm
          established by Indian chartered accountants having over two decades of
          industry experience. We have a proven track record of providing
          high-quality services to clients across India from our offices in
          Delhi, Noida, Gurgaon (Gurugram), and Greater Noida.
        </p>
        <p className="mb-6">
          We offer end-to-end solutions in a wide spectrum of services,
          providing comprehensive financial and business solutions to meet all
          your professional needs.
        </p>
        <p>
          We are catering to Indian and Multinational Corporate, Banking and
          Financial Institutions, Start-ups, High net-worth individuals,
          executives and expatriates across various industry sectors.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;

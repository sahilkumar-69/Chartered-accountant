import { ContactUscontactInfo } from "../../Store/Data";

const ContactInfoCard = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {ContactUscontactInfo.map((info, index) => (
        <div
          key={index}
          className={`bg-white rounded-xl  p-8 border-l-4 border-${info.color}-500 hover:shadow-xl transition-shadow duration-300`}
        >
          <div className="flex items-center mb-4">
            <info.icon className={`h-8 w-8 text-${info.color}-500 mr-3`} />
            <h3 className="text-xl font-bold text-gray-900">{info.title}</h3>
          </div>
          <div className="space-y-2">
            {info.details.map((detail, idx) => (
              <p key={idx} className="text-gray-700">
                {detail}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfoCard;

import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  User,
  MessageSquare,
  Building2,
  AlertCircle,
} from "lucide-react";
import DownArrow from "../components/DownArrow";

const ContactPage = () => {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    // let data;
    setIsSubmitting(true);
    console.log(formData);
    try {
      const resp = await fetch("http://localhost:3003/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      console.log(resp);

      const data = await resp.json();

      console.log(data);
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitMessage(
          "Thank you for your message! We will get back to you soon."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91-120-4164460", "+91-9811255829"],
      color: "blue",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["ahujaandahuja@gmail.com"],
      color: "green",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 9:00 AM - 2:00 PM"],
      color: "purple",
    },
  ];

  const offices = [
    {
      city: "Noida",
      title: "CA Firm in Noida",
      name: "NEXUS – Chartered Accountants",
      address: [
        "B-077, 7th Floor",
        "ATS Bouquet",
        "A2/2, Sector 132",
        "Noida, (U.P) – 201304",
      ],
      color: "blue",
    },
    {
      city: "Gurgaon",
      title: "Gurgaon CA Firm",
      name: "NEXUS, Chartered Accountants",
      address: [
        "26 B2 ,Ground Floor ",
        "Spaze itech Tower",
        "Sohna Road, Sector 49",
        "Gurugram, Haryana 122002",
      ],
      color: "indigo",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <DownArrow />

      <div
        style={{
          backgroundImage: 'url("src/assets/contactus.webp")',
        }}
        className="bg-no-repeat  bg-center bg-cover  h-[80svh] from-blue-900 to-indigo-900 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Get in touch with our experienced team of chartered accountants
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Information Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl  p-8 border-l-4 border-${info.color}-500 hover:shadow-xl transition-shadow duration-300`}
            >
              <div className="flex items-center mb-4">
                <info.icon className={`h-8 w-8 text-${info.color}-500 mr-3`} />
                <h3 className="text-xl font-bold text-gray-900">
                  {info.title}
                </h3>
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

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">
                Send us a Message
              </h2>
            </div>

            {submitMessage && (
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <p className="text-green-800">{submitMessage}</p>
              </div>
            )}

            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+91-9876543210"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What is this regarding?"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please provide details about your query..."
                />
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Office Locations */}
          <div className="space-y-8">
            <div className="flex items-center mb-6">
              <Building2 className="h-8 w-8 text-green-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">
                Our Locations
              </h2>
            </div>

            {offices.map((office, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg p-8 border-l-4 border-${office.color}-500 hover:shadow-xl transition-shadow duration-300`}
              >
                <div className="flex items-center mb-4">
                  <MapPin className={`h-6 w-6 text-${office.color}-500 mr-3`} />
                  <h3 className="text-xl font-bold text-gray-900">
                    {office.city} Office
                  </h3>
                </div>

                <h4 className="font-semibold text-gray-800 mb-3">
                  {office.name}
                </h4>

                <div className="space-y-1">
                  {office.address.map((line, idx) => (
                    <p key={idx} className="text-gray-700">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                Need Professional Services?
              </h3>
              <p className="text-blue-800 mb-4">
                We provide comprehensive chartered accountancy services across
                Delhi NCR. Contact us for consultation on taxation, auditing,
                company formation, and financial planning.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Tax Planning
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Auditing
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Company Formation
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  Financial Planning
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

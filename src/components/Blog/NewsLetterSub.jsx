import { useState } from "react";
import toast from "react-hot-toast";

const NewsLetterSub = () => {
  const [loading, setLoading] = useState(false);
  const [mail, setMail] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    const resp = await fetch(
      "https://cawebsite-gg5g.onrender.com/api/subscribe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: mail }),
      }
    );

    const data = await resp.json();
    setLoading(false);
    setMail("");
    toast.success("Subscribed");

    console.log("data", data);
  };

  return (
    <section className="bg-gradient-to-b from-blue-900 to-indigo-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest updates on tax laws, GST
          regulations, and financial compliance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={mail}
            disabled={loading}
            onChange={(e) => {
              setMail(e.target.value);
            }}
            required
            className="flex-1 px-4 py-3 border-[1px] border-white hover:border-2 text-white rounded-lg focus:outline-none focus:ring-2 "
          />
          <button
            disabled={loading}
            onClick={handleSubmit}
            className="text-white hover:text-blue-900 px-6 py-3 rounded-lg font-medium hover:bg-white border-2 border-white transition-colors"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSub;

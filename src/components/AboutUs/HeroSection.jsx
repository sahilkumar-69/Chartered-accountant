const HeroSection = () => {
  return (
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
            knowledge with modern tools and technology to deliver solutions that
            are not just efficient, but future-ready.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

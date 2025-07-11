// import heroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(
          "https://www.vyomgroup.com/public/images/products/1721490465-real-estate-company.jpg"
        )`,
      }}
    >
      <div className="absolute inset-0 bg-black/30 flex items-end p-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Chartered Accountants in Delhi. <br />
            Professional CA Services Firm in India
          </h1>

          <button className="mt-6 hover:cursor-pointer bg-white text-green-600 font-semibold px-5 py-3 rounded-full flex items-center gap-2 shadow-lg hover:bg-gray-100 transition">
            <i className="fa-solid fa-video"></i>
            Call us now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

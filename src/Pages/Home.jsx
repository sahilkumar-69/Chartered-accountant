import ServiceCard from "../components/Card";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavigationBar from "../components/NavigationBar";

const Home = () => {
  return (
    <div className="relative ">
      {/* <NavigationBar /> */}
      <Hero />
      <div className=" ">
        <h1 className=" p-4 text-3xl">
          Our Chartered Accountancy Services in Delhi / NCR
        </h1>
      </div>
      <ServiceCard />
      <div>
        <p className="p-2 ml-3 w-fit text-orange-500 border-2 border-amber-500 ">
          Read About Our Services
        </p>
      </div>
      <div className=" ">
        <h1 className=" p-4 text-3xl">
          CA Firms in Delhi: News, Updates & Posts
        </h1>
      </div>
      <ServiceCard />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

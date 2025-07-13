const HeroBlog = () => {
  return (
    <section
      style={{
        backgroundImage:
          "url('https://plus.unsplash.com/premium_photo-1661407772941-c5a2a5c9595b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D')",
      }}
      className="bg-no-repeat bg-cover   h-[80svh] from-blue-900 to-blue-800 text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Expert Insights & <span className="text-yellow-500">Updates</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest developments in taxation, GST,
            auditing, and financial compliance from our team of experienced
            Chartered Accountants.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-blue-200">
            <span>GST Updates</span>
            <span>•</span>
            <span>Tax Planning</span>
            <span>•</span>
            <span>Audit Insights</span>
            <span>•</span>
            <span>Compliance Guide</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBlog;

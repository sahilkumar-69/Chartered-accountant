import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlogContext from "../Context/Blogs";
import { ServiceComponent } from "../components/Home/ServiceComponent";

export default function DedicatedServicePage() {
  const { id } = useParams();

  const [Post, setPost] = useState({});

  const { service } = useContext(BlogContext);

  useEffect(() => {
    scrollTo(0, 0);

    const selectedPost = service.data.find((post) => post._id === id);
    // console.log("first");
    setPost(selectedPost);
  }, [id, service]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <ServiceComponent {...Post} />
      </div>
    </div>
  );
}

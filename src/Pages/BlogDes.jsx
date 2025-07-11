import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function BlogPage1() {
  const { id } = useParams();

  useEffect(() => {
    scrollTo(0, 0);
  }, []);

  const blogPostData = {
    title: "Exploring the Wonders of Modern Web Development",
    author: "Jane Doe",
    date: "July 10, 2025",
    content: `
      <p class="mb-4">
        In today's rapidly evolving digital landscape, modern web development stands at the forefront of innovation, constantly pushing the boundaries of what's possible online. From interactive user interfaces to robust backend systems, the tools and technologies available to developers are more powerful and versatile than ever before.
      </p>
      <p class="mb-4">
        One of the most significant shifts has been the rise of component-based architectures, popularized by libraries and frameworks like React, Vue, and Angular. These approaches allow developers to build complex UIs by breaking them down into smaller, reusable pieces, leading to more maintainable and scalable applications.
      </p>
      <img src="https://placehold.co/800x400/E0F2F7/000000?text=Web+Development" alt="Web Development" class="w-full rounded-lg shadow-md mb-6">
      <h2 class="text-2xl font-semibold text-gray-800 mb-3">The Power of Frameworks and Libraries</h2>
      <p class="mb-4">
        Frameworks provide a structured way to build applications, offering conventions and tools that streamline the development process. Libraries, on the other hand, offer specific functionalities that can be integrated into any project. The choice between them often depends on the project's scope and the team's preferences.
      </p>
      <ul class="list-disc list-inside mb-4 pl-5">
        <li class="mb-2"><strong>React:</strong> A declarative, component-based JavaScript library for building user interfaces.</li>
        <li class="mb-2"><strong>Vue.js:</strong> A progressive framework for building user interfaces, known for its simplicity and flexibility.</li>
        <li class="mb-2"><strong>Angular:</strong> A comprehensive, opinionated framework for building large-scale enterprise applications.</li>
      </ul>
      <h2 class="text-2xl font-semibold text-gray-800 mb-3">Embracing Responsive Design</h2>
      <p class="mb-4">
        With the proliferation of devices, from smartphones to large desktop monitors, responsive design has become an absolute necessity. Tailwind CSS, with its utility-first approach, makes it incredibly easy to build responsive layouts by applying classes directly in your HTML/JSX, adapting content seamlessly across various screen sizes.
      </p>
      <blockquote class="border-l-4 border-blue-500 pl-4 py-2 italic text-gray-700 mb-4">
        "The best way to predict the future is to create it." - Peter Drucker
      </blockquote>
      <p>
        As web development continues to evolve, staying updated with the latest trends and technologies is crucial. Continuous learning and experimentation are key to mastering this dynamic field and creating impactful digital experiences.
      </p>
    `,
    tags: ["Web Development", "React", "Tailwind CSS", "Programming"],
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans p-4 sm:p-6 md:p-8 lg:p-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <BlogPost {...blogPostData} />
      </div>
    </div>
  );
}

// BlogPost component displays the full blog content
function BlogPost({ title, author, date, content, tags }) {
  return (
    <article className="p-6 sm:p-8 md:p-10 lg:p-12">
      {/* Blog Post Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          {title}
        </h1>
        <div className="text-gray-600 text-sm sm:text-base flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <p className="flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              ></path>
            </svg>
            By <span className="font-medium ml-1 text-blue-600">{author}</span>
          </p>
          <span className="hidden sm:inline-block text-gray-400">•</span>
          <p className="flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-blue-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              ></path>
            </svg>
            <time dateTime={date}>{date}</time>
          </p>
        </div>
      </header>

      {/* Blog Post Content */}
      <div
        className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {/* Blog Post Tags */}
      {tags && tags.length > 0 && (
        <footer className="mt-10 pt-6 border-t border-gray-200">
          <div className="flex flex-wrap gap-2 justify-center">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full hover:bg-blue-200 transition-colors duration-200"
              >
                #{tag}
              </span>
            ))}
          </div>
        </footer>
      )}
    </article>
  );
}

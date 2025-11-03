import React from "react";

// Example blog posts
const blogPosts = [
  {
    id: 1,
    title: "The Art of Silver Jewelry: Crafting Timeless Pieces",
    summary:
      "Explore how BSJ SILVER crafts unique silver jewelry, combining traditional techniques with modern designs.",
    image: "https://cdn.pixabay.com/photo/2017/03/05/19/54/chain-2119611_1280.jpg",
    date: "Oct 10, 2025",
    link: "/blog/1",
    tags: ["Crafting", "Silver", "Jewelry"],
  },
  {
    id: 2,
    title: "Top Silver Jewelry Trends for 2025",
    summary:
      "Discover the hottest silver jewelry trends this year and how to style them for elegance and sophistication.",
    image: "https://cdn.pixabay.com/photo/2018/07/02/15/31/jewelry-3511783_1280.jpg",
    date: "Sep 25, 2025",
    link: "/blog/2",
    tags: ["Trends", "Style", "Silver"],
  },
  {
    id: 3,
    title: "Caring for Your Silver Jewelry: Tips & Tricks",
    summary:
      "Learn the best ways to clean, store, and maintain your silver jewelry to keep it shining for years.",
    image: "https://cdn.pixabay.com/photo/2017/07/08/19/16/decor-2485297_1280.png",
    date: "Sep 05, 2025",
    link: "/blog/3",
    tags: ["Care", "Maintenance", "Silver"],
  },
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            BSJ SILVER Blog
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            Explore insights, stories, and tips from the world of silver jewelry.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="flex flex-col space-y-12">
          {blogPosts.map((post, idx) => (
            <div
              key={post.id}
              className={`flex flex-col md:flex-row ${
                idx % 2 === 1 ? "md:flex-row-reverse" : ""
              } bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300`}
              style={{ minHeight: "300px" }} // fixed min height
            >
              <div className="relative md:w-1/2 h-64 md:h-80 flex-shrink-0">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
              </div>
              <div className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                  <h2 className="text-2xl font-semibold text-gray-900 mt-2 mb-4">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 mb-4">{post.summary}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={post.link}
                  className="self-start text-white bg-yellow-500 py-2 px-10 rounded-full font-bold text-lg hover:bg-yellow-400 transition"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Featured CTA */}
        <div className="relative mt-20 overflow-hidden rounded-xl">
          <div
            className="absolute inset-0 bg-gradient-to-tr from-[#2C2F59] to-[#4A4D80] skew-y-[-6deg] transform -translate-y-10"
          ></div>
          <div className="relative z-10 text-center py-24 px-6 sm:px-12 lg:px-20">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Share Your Jewelry Story
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Got a story, collection, or styling tips to share? Feature your journey on BSJ SILVER's blog and inspire others.
            </p>
            <a
              href="mailto:blog@bsjsilver.com"
              className="inline-block bg-yellow-500 text-gray-900 py-4 px-10 rounded-full font-bold text-lg hover:bg-yellow-400 transition"
            >
              Submit Your Story
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;

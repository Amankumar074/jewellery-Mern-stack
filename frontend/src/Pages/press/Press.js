import React from "react";

// Individual Press Card Component
const PressCard = ({ article }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h2>
        <p className="text-gray-700 mb-4 transition-all duration-300">
          {expanded
            ? article.description
            : article.description.length > 120
              ? article.description.slice(0, 120) + "..."
              : article.description}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-600 font-semibold hover:underline"
        >
          {expanded ? "Show Less" : "Read More →"}
        </button>
      </div>
    </div>
  );
};

// Main Press Page
const PressPage = () => {
  const pressArticles = [
    {
      id: 1,
      title: "BSJ SILVER Featured in Elegant Jewelry Monthly",
      description:
        "Our handcrafted silver pieces were featured in the latest edition of Elegant Jewelry Monthly, highlighting our unique designs and craftsmanship. The article details the techniques used in our silver work and showcases some of our signature collections that blend tradition with modern aesthetics.",
      image: "https://cdn.pixabay.com/photo/2017/07/08/19/16/decor-2485297_1280.png",
    },
    {
      id: 2,
      title: "BSJ SILVER Wins Best Silver Collection Award",
      description:
        "We were honored with the Best Silver Collection Award for 2025, recognizing our commitment to quality and innovative designs. This award emphasizes our continuous effort to bring elegant and timeless silver jewelry to our customers, combining craftsmanship with exquisite design.",
      image: "https://cdn.pixabay.com/photo/2018/07/02/15/31/jewelry-3511783_1280.jpg",
    },
    {
      id: 3,
      title: "Interview with BSJ SILVER Founder",
      description:
        "Read our exclusive interview where the founder shares the journey of BSJ SILVER and the inspiration behind each collection. From humble beginnings to becoming a recognized brand, this interview highlights our philosophy, design process, and the passion for creating fine silver jewelry.",
      image: "https://cdn.pixabay.com/photo/2017/03/05/19/54/chain-2119611_1280.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            In the Press
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto">
            BSJ SILVER has been featured in leading media outlets, showcasing our unique craftsmanship and timeless designs.
          </p>
        </div>

        {/* Press Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pressArticles.map((article) => (
            <PressCard key={article.id} article={article} />
          ))}
        </div>

        {/* Highlight Section */}
        {/* Highlight Section */}
        <div className="relative mt-16 rounded-xl overflow-hidden ">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full"
            style={{
              backgroundImage:
                "url('https://cdn.pixabay.com/photo/2017/07/08/19/16/decor-2485297_1280.png')",
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center py-20 px-6 sm:px-12 lg:px-20">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
              Want to Share Your Jewelry Story?
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Submit your story, collection, or styling tips and get featured on
              the BSJ SILVER blog.
            </p>
            <a
              href="mailto:blog@bsjsilver.com"
              className="inline-block bg-yellow-500 text-gray-900 py-4 px-10 rounded-full font-bold text-lg hover:bg-yellow-400 transition"
            >
              Share Your Story
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressPage;

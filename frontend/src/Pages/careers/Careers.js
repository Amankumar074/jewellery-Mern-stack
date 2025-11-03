import React from "react";

const jobListings = [
  {
    id: 1,
    title: "Jewelry Designer",
    location: "Delhi, India",
    type: "Full-time",
    description:
      "Craft unique silver jewelry combining tradition with modern aesthetics. Collaborate with the team to design timeless pieces.",
  },
  {
    id: 2,
    title: "Marketing & PR Specialist",
    location: "Remote",
    type: "Full-time",
    description:
      "Create engaging campaigns, manage social media, and boost BSJ SILVER’s brand presence.",
  },
  {
    id: 3,
    title: "E-Commerce Manager",
    location: "Mumbai, India",
    type: "Full-time",
    description:
      "Manage our online store operations, product listings, and customer engagement.",
  },
];

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative flex flex-col lg:flex-row items-center bg-gradient-to-r from-[#2C2F59] to-[#4A4D80] text-white h-[400px] lg:h-[450px]">
  <div className="lg:w-1/2 px-8 py-8 lg:px-20 lg:py-12 flex flex-col justify-center">
    <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">
      Careers at BSJ SILVER
    </h1>
    <p className="text-base sm:text-lg mb-4 max-w-lg">
      Join our family of creative, passionate, and talented individuals crafting timeless silver jewelry.
    </p>
    <a
      href="#open-positions"
      className="inline-block bg-yellow-500 text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-yellow-400 transition"
    >
      Explore Jobs
    </a>
  </div>
  <div className="lg:w-1/2 h-full relative flex justify-center items-center">
    <img
      src="https://cdn.pixabay.com/photo/2017/07/08/19/16/decor-2485297_1280.png"
      alt="Jewelry"
      className="w-full h-full object-contain"
    />
  </div>
</section>


      {/* Benefits / Why Work With Us */}
      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Why Work With Us
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-[#2C2F59]">
              Creative Freedom
            </h3>
            <p className="text-gray-700">
              Design unique jewelry pieces with the freedom to experiment and innovate.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-[#2C2F59]">
              Growth Opportunities
            </h3>
            <p className="text-gray-700">
              Learn, grow, and advance your career in a thriving creative environment.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg text-center transform hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-[#2C2F59]">
              Collaborative Culture
            </h3>
            <p className="text-gray-700">
              Work with passionate professionals who share your love for design and craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-20" id="open-positions">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Open Positions
        </h2>
        <div className="space-y-8">
          {jobListings.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row justify-between items-start md:items-center transform hover:scale-105 transition duration-300"
            >
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl font-semibold text-gray-900">{job.title}</h3>
                <p className="text-gray-500">{job.location} | {job.type}</p>
                <p className="text-gray-700 mt-2">{job.description}</p>
              </div>
              <a
                href="mailto:careers@bsjsilver.com"
                className="inline-block mt-4 md:mt-0 bg-[#2C2F59] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#1f2345] transition"
              >
                Apply Now
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / Apply Even If No Job */}
      <section className="relative bg-gradient-to-r from-[#2C2F59] to-[#4A4D80] py-24 px-4 sm:px-6 lg:m-10 text-center text-white">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
          Don’t See Your Role?
        </h2>
        <p className="text-lg sm:text-xl mb-8 max-w-3xl mx-auto">
          We’re always looking for talented individuals. Send your resume, and we’ll contact you when the right opportunity arises.
        </p>
        <a
          href="mailto:careers@bsjsilver.com"
          className="inline-block bg-yellow-500 text-gray-900 py-4 px-10 rounded-full font-bold text-lg hover:bg-yellow-400 transition"
        >
          Submit Your Resume
        </a>
      </section>
    </div>
  );
};

export default CareersPage;

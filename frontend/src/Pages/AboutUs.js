import React from "react";
import { FaInstagram, FaPinterest, FaFacebookF } from "react-icons/fa";

const teamMembers = [
  {
    id: 1,
    name: "Sophia Loren",
    role: "Creative Director",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=400",
    socials: {
      instagram: "#",
      pinterest: "#",
      facebook: "#",
    },
  },
  {
    id: 2,
    name: "Alexander Pierce",
    role: "Master Jeweler",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=400",
    socials: {
      instagram: "#",
      pinterest: "#",
      facebook: "#",
    },
  },
  {
    id: 3,
    name: "Isabella Rossi",
    role: "Design Specialist",
    img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?crop=entropy&cs=tinysrgb&fit=crop&h=400&w=400",
    socials: {
      instagram: "#",
      pinterest: "#",
      facebook: "#",
    },
  },
];

export default function JewelryTeamPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#D9B77A] to-[#FCE9A0] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Team</h1>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 transform transition duration-300"
          >
            <img
              src={member.img}
              alt={member.name}
              className="h-40 w-40 mx-auto rounded-full mb-4 object-cover border-4 border-[#D9B77A]"
            />
            <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
            <p className="text-gray-600 uppercase tracking-wide mb-4">{member.role}</p>

            {/* Social Icons */}
            <div className="flex justify-center space-x-4">
              <a
                href={member.socials.instagram}
                className="p-2 rounded-full bg-[#C13584] text-white hover:bg-[#a2286f] transition"
              >
                <FaInstagram />
              </a>
              <a
                href={member.socials.pinterest}
                className="p-2 rounded-full bg-[#E60023] text-white hover:bg-[#b4001b] transition"
              >
                <FaPinterest />
              </a>
              <a
                href={member.socials.facebook}
                className="p-2 rounded-full bg-[#3b5998] text-white hover:bg-[#2d4373] transition"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Optional About / Info Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl font-semibold">Why Choose Our Jewelry?</h2>
          <p className="text-gray-700">
            Each piece is meticulously crafted using the finest materials. Our artisans blend traditional techniques with modern designs to create jewelry that lasts generations.
          </p>
          <p className="text-gray-700">
            We value quality, elegance, and the satisfaction of our customers. Your trust inspires our creativity.
          </p>
        </div>
      </section>
    </div>
  );
}

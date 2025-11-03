import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#D9B77A] to-[#FCE9A0] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-semibold">Get in Touch</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            facilisis justo vitae dolor pulvinar, sit amet hendrerit purus
            tincidunt.  
          </p>
          <p className="text-gray-700">
            Address: 123 Street Name, City, Country
          </p>
          <p className="text-gray-700">Phone: +91 12345 67890</p>
          <p className="text-gray-700">Email: contact@example.com</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="p-3 rounded-full bg-[#3b5998] text-white hover:bg-[#2d4373] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="p-3 rounded-full bg-[#00acee] text-white hover:bg-[#0084b4] transition">
              <FaTwitter />
            </a>
            <a href="#" className="p-3 rounded-full bg-[#C13584] text-white hover:bg-[#833567] transition">
              <FaInstagram />
            </a>
            <a href="#" className="p-3 rounded-full bg-[#0e76a8] text-white hover:bg-[#064c75] transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#D9B77A] outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-[#D9B77A] outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Message</label>
              <textarea
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-lg p-3 h-32 focus:ring-2 focus:ring-[#D9B77A] outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#2c2f59] text-white font-semibold py-3 rounded-lg hover:bg-[#c9a85e] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Dummy Content / Info Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            efficitur, ligula vel facilisis laoreet, nunc urna fermentum
            turpis, sed vehicula lorem odio at nulla.  
          </p>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            facilisis justo vitae dolor pulvinar, sit amet hendrerit purus
            tincidunt.  
          </p>
          <p className="text-gray-700">
            Our team is dedicated to providing the best service possible. Reach
            out today and let's start the conversation!
          </p>
        </div>
      </section>
    </div>
  );
}

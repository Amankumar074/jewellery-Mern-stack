import React from "react";
import { Link } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="bg-[#2C2F59] text-white pt-10 pb-2">
      <div className="container mx-auto px-4">
        {/* Sections */}
        <div className="grid grid-cols-12 gap-6">

          {/* Logo & Social */}
          <div className="col-span-12 md:col-span-5 order-1 flex flex-col justify-between">
            <div className="flex hidden md:flex">
              <img
                src="/header/headingimg.png"
                className="h-10"
                alt="Left Decoration"
              />
              <a
                href="/"
                style={{ fontFamily: '"Playfair Display", serif' }}
                className="text-white font-normal text-2xl lg:text-3xl"
              >
                BSJ SILVER
              </a>
            </div>

            <div className="hidden md:block">
              <p className="mb-3">Connect with us on</p>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="group w-10 h-10 flex items-center justify-center rounded-full bg-black hover:!bg-white transition-colors duration-300"
                >
                  <i className="fab fa-instagram text-white group-hover:!text-black transition-colors duration-300"></i>
                </a>
                <a
                  href="#"
                  className="group w-10 h-10 flex items-center justify-center rounded-full bg-black hover:!bg-white transition-colors duration-300"
                >
                  <i className="fab fa-facebook-f text-white group-hover:!text-black transition-colors duration-300"></i>
                </a>
                <a
                  href="#"
                  className="group w-10 h-10 flex items-center justify-center rounded-full bg-black hover:!bg-white transition-colors duration-300"
                >
                  <i className="fab fa-linkedin-in text-white group-hover:!text-black transition-colors duration-300"></i>
                </a>
                <a
                  href="#"
                  className="group w-10 h-10 flex items-center justify-center rounded-full bg-black hover:!bg-white transition-colors duration-300"
                >
                  <i className="fab fa-pinterest-p text-white group-hover:!text-black transition-colors duration-300"></i>
                </a>
                <a
                  href="#"
                  className="group w-10 h-10 flex items-center justify-center rounded-full bg-black hover:!bg-white transition-colors duration-300"
                >
                  <i className="fab fa-x-twitter text-white group-hover:!text-black transition-colors duration-300"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Policy */}
          <div className="col-span-6 md:col-span-2 order-2">
            <h6 className="uppercase mb-3 font-semibold">Policy</h6>
            <ul className="space-y-1">
              <li><a href="/privacy" className="text-white hover:underline text-sm">Privacy Policy</a></li>
              <li><a href="/termsandconditions" className="text-white hover:underline text-sm">Terms & Conditions</a></li>
              <li><a href="/shippingpolicy" className="text-white hover:underline text-sm">Shipping Policy</a></li>
              <li><a href="/returnpolicy" className="text-white hover:underline text-sm">Return Policy</a></li>
              <li><a href="/warrantypolicy" className="text-white hover:underline text-sm">Warranty Policy</a></li>
              <li><a href="#" className="text-white hover:underline text-sm">Sitemap</a></li>
            </ul>
          </div>

          {/* About Us */}
          <div className="col-span-6 md:col-span-2 order-3">
            <Link to='/aboutus' className="uppercase mb-3 font-semibold">About Us</Link>
            <ul className="space-y-1">
              <li><a href="/ourstory" className="text-white hover:underline text-sm">Our Story</a></li>
              <li><a href="/press" className="text-white hover:underline text-sm">Press</a></li>
              <li><a href="/blog" className="text-white hover:underline text-sm">Blog</a></li>
              <li><a href="careers" className="text-white hover:underline text-sm">Careers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-12 md:col-span-3 order-4">
            <Link to="/contactus" className="uppercase mb-3 font-semibold">Contact Us</Link>
            <p className="text-sm mb-1"><strong>General:</strong> info@bsjsilver.com</p>
            <p className="text-sm mb-1"><strong>Corporate:</strong> b2b@bsjsilver.com</p>
            <p className="text-sm">
              <strong>Address:</strong><br />
              Terapanth Bhawan, Kuber House Road,<br />
              Behind Balmandir Sen. Sec. School,<br />
              Jumner Well - Geeta Satsag Bhawan,<br />
              Sardarshahar, Rajasthan - 331403
            </p>
          </div>
        </div>
        <div className="block md:hidden">
          <p className="mb-3">Connect with us on</p>
          <div className="flex gap-3">
            <a
              href="#"
              className="group w-10 h-10 flex items-center justify-center rounded-full bg-black hover:!bg-white transition-colors duration-300"
            >
              <i className="fab fa-instagram text-white group-hover:!text-black transition-colors duration-300"></i>
            </a>
            <a
              href="#"
              className="group w-10 h-10 flex items-center justify-center rounded-full bg-black hover:!bg-white transition-colors duration-300"
            >
              <i className="fab fa-facebook-f text-white group-hover:!text-black transition-colors duration-300"></i>
            </a>
            <a
              href="#"
              className="group w-10 h-10 flex items-center justify-center rounded-full bg-black hover:!bg-white transition-colors duration-300"
            >
              <i className="fab fa-linkedin-in text-white group-hover:!text-black transition-colors duration-300"></i>
            </a>
            <a
              href="#"
              className="group w-10 h-10 flex items-center justify-center rounded-full bg-black hover:!bg-white transition-colors duration-300"
            >
              <i className="fab fa-pinterest-p text-white group-hover:!text-black transition-colors duration-300"></i>
            </a>
            <a
              href="#"
              className="group w-10 h-10 flex items-center justify-center rounded-full bg-black hover:!bg-white transition-colors duration-300"
            >
              <i className="fab fa-x-twitter text-white group-hover:!text-black transition-colors duration-300"></i>
            </a>
          </div>
        </div>

        {/* Bottom Text & Payment */}
        <div className=" mt-20 flex md:flex-row flex-col justify-between items-center">
          <div className="w-full md:w-5/12">
            <p className="text-xs">© 2025 Hidako Technology | All Rights Reserved
              Terms - Accessibility Sitemap Privacy Do not sell my personal information
              This site may collect, use and disclose personal information. Please refer to our Privacy Policy for more information</p>
          </div>
          <div className="flex justify-center mt-2">
            <img src="/footer/visa.png" alt="Visa" className="h-14" />
            <img src="/footer/visa2.png" alt="MasterCard" className="h-14" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

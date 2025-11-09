import React, { useState, useEffect, useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartPopup from './CartPopup'
import api from '../api/api'

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart, wishlist } = useCart();
  const [cartPopupOpen, setCartPopupOpen] = useState(false);
  const cartRef = useRef(null);

  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [categoriesError, setCategoriesError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await api.get("/categories");
       setCategories(response.data || []);

      } catch (err) {
        console.error("Error fetching categories:", err);
        setCategoriesError(err);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setCartPopupOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative w-full bg-cover bg-center shadow-md" style={{ backgroundImage: `url("/header/backgroundimag.png")`, }}>
      {/* Left & Right Images as Background */}
      <img
        src="/header/leftimg.png"
        className="absolute top-0 left-0 h-16 z-100 pointer-events-none hidden md:block"
        alt="Left Decoration"
      />
      <div className="items-center gap-3 hidden md:flex pt-4 justify-center">
        <img
          src="/header/headingimg.png"
          className="h-10"
          alt="Left Decoration"
        />
        <Link
          to="/"
          style={{ fontFamily: '"Playfair Display", serif' }}
          className="text-white font-normal text-2xl lg:text-3xl"
        >
          BSJ SILVER
        </Link>
      </div>

      <img
        src="/header/rightimg.png"
        className="absolute bottom-0 right-0 h-16 z-0 pointer-events-none  hidden md:block"
        alt="Right Decoration"
      />

      {/* Main Header Content */}
      <div className=" mx-auto flex items-center justify-center lg:py-5 relative z-10">
        {/* Mobile Header */}
        <div className="lg:hidden grid grid-cols-12 items-center w-full p-0 h-20 px-2">
          <div className="col-span-2 flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <i className="bi bi-list text-3xl"></i>
            </button>
          </div>

          <div className="col-span-6 text-center lg:text-left flex">
            <img
              src="/header/headingimg.png"
              className="h-10"
              alt="Left Decoration"
            />
            <Link
              to="/"
              style={{ fontFamily: '"Playfair Display", serif' }}
              className="text-white font-normal text-2xl lg:text-3xl"
            >
              BSJ SILVER
            </Link>
          </div>

          <div className="col-span-4 flex justify-end items-center">
            <Link
              to="#"
              className="text-white text-2xl hover:text-yellow-400 transition-colors mr-4"
            >
              <img src="/header/user.png" className="h-8" />
            </Link>
            <Link
              to="/wishlist"
              className="text-white text-2xl hover:text-yellow-400 transition-colors mr-4"
            >
              <i className="bi bi-heart"></i>
              {wishlist.length > 0 && (
                <span className="absolute top-5 right-14 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <CartPopup showCart={true} />
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex lg:items-center lg:gap-6">
          <ul className="flex gap-6 text-sm font-semibold">
            {categories.map((category) => (
              <li key={category.id}>
                <Link
                  to={`/category/${category.slug}`}
                  className="text-white hover:text-yellow-400 transition-colors whitespace-nowrap"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right icons desktop */}
          <div className="flex items-center gap-4 ml-8">
            <Link
              to="#"
              className="text-white text-xl hover:text-yellow-400 transition-colors"
            >
              <img src="/header/user.png" className="h-8" />
            </Link>
            <Link to="/wishlist" className="relative text-white">
              <i className="bi bi-heart text-2xl"></i>
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <CartPopup showCart={true} />
          </div>
        </nav>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        ></div>
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#2C2F59] z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        {/* Close button */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-700">
          <div className="text-white font-bold text-xl">BSJ SILVER</div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-2xl focus:outline-none"
          >
            <i className="bi bi-x"></i>
          </button>
        </div>

        {/* Menu items */}
        <ul className="flex flex-col gap-4 p-4 text-white font-semibold">
          {categories.map((category) => (
            <li key={category.id}>
              <Link to={`/category/${category.slug}`} 
              className="block" onClick={() => setIsOpen(false)}>
                 {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;

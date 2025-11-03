import React, { useState, useEffect, useRef } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartPopup from './CartPopup'
import api from '../api/api'

function StickyHeader() {
  const [show, setShow] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`hidden lg:flex fixed top-0 left-0 w-full z-50 shadow-md transition-transform duration-500 ${show ? "translate-y-0" : "-translate-y-full"
        }`}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url("/header/backgroundimag.png")`,
      }}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-white font-extrabold text-2xl">
          <Link
            to="/"
            style={{ fontFamily: '"Playfair Display", serif' }}
            className="text-white font-normal text-2xl"
          >
            BSJ SILVER
          </Link>
        </div>
        <nav className="flex items-center gap-8">
          <ul className="flex gap-3 text-sm font-semibold">
            {categories.map((category) => (
              <li key={category.id}>
               <Link
                 to={`/category/${category.slug}`} 
                 className="text-white">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 ml-8">
            <Link to="#" className="text-white text-xl hover:text-yellow-400 transition-colors">
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

            <CartPopup showCart={show} />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default StickyHeader;

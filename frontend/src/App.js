import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import OfferBanner from './components/OfferBanner';
import NewArrivals from './components/NewArrivals';
import BSJCollection from './components/BSJCollection';
import Bannersection from './components/Bannersection';
import TimelessEssentials from './components/TimelessEssentials';
import RoyalCircle from './components/RoyalCircle';
import CategoryPage from './Pages/CategoryPage';
import ProductPage from './Pages/ProductPage';
import StickyHeader from './components/StickyHeader'
import CartPage from './Pages/CartPage';
import WishlistPage from "./Pages/WishlistPage";
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'
import Privacy from './Pages/privacy/Privacy'
import TermsAndConditions from './Pages/termsAndConditions/TermsAndConditions'
import ReturnPolicy from './Pages/returnpolicy/ReturnPolicy'
import ShippingPolicy from './Pages/shippingpolicy/ShippingPolicy'
import WarrantyPolicy from './Pages/warrantypolicy/WarrantyPolicy'
import OurStory from './Pages/ourstory/OurStory'
import Press from './Pages/press/Press'
import Blog from './Pages/blog/Blog'
import Careers from './Pages/careers/Careers'
import Checkout from './Pages/Checkout'
import AdminLayout from "./admin/AdminLayout";
import AdminLogin from "./admin/AdminLogin";
import ProtectedRoute from "./admin/ProtectedRoute";
import Dashboard from "./admin/Dashboard";
import Products from "./admin/Products";
import Orders from "./admin/Orders";
import { CartProvider } from "./context/CartContext";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



import './App.css';

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <StickyHeader />
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <div
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(186, 157, 75, 0.5), rgba(216, 208, 187, 0.5)), url("/homepage/Vector.png")`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <SearchBar />
                  <Categories />
                  <OfferBanner />
                </div>
                <NewArrivals />
                <BSJCollection />
                <Bannersection />
                <TimelessEssentials />
                <RoyalCircle />
              </>
            }
          />

          {/* Admin Panel Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="categories" element={<Categories />} />
            <Route path="orders" element={<Orders />} />
          </Route>


          {/* Category page */}
          <Route path="/category/:slug" element={<CategoryPage />} />
          {/* Product detail page */}
          <Route path="/product/:category/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/shippingpolicy" element={<ShippingPolicy />} />
          <Route path="/returnpolicy" element={<ReturnPolicy />} />
          <Route path="/warrantypolicy" element={<WarrantyPolicy />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/press" element={<Press />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" autoClose={1500} hideProgressBar={true}
          newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover
          transition={Slide} style={{ fontSize: "14px", borderRadius: "10px", padding: "10px 20px" }}
        />
      </CartProvider>
    </>
  );
}

export default App;

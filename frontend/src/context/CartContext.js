import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Add product to cart
  const addToCart = (product) => {
  setCart((prev) => {
    const exists = prev.find((item) => item.id === product.id);
    if (exists) {
      // Same product already in cart → ignore or show toast
      toast.info(`${product.name} is already in the cart!`);
      return prev;
    }
    // Different product → add to cart
    return [...prev, { ...product, qty: 1 }];
  });
};

  // Remove product from cart
  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Update quantity of a cart item
  const updateQty = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1) }
          : item
      )
    );
  };

  // Add product to wishlist
  const addToWishList = (product) => {
    if (!wishlist.find((item) => item.id === product.id)) {
      setWishlist([...wishlist, product]);
    }
  };

  // Remove product from wishlist
  const removeFromWishList = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeItem,
        updateQty,
        addToWishList,
        removeFromWishList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

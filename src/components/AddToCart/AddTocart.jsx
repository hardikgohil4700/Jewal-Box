import React, { createContext, useContext, useState, useEffect } from 'react';


const CartContext = createContext();


export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : { count: 0 };
  });

 
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Method to add an item to the cart
  const addToCart = () => {
    setCart((prevCart) => ({ ...prevCart, count: prevCart.count + 1 }));
  };


  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}


export function useCart() {
  return useContext(CartContext);
}

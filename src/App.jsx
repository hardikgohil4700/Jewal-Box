import React from 'react';
import { CartProvider, useCart } from "./components/AddToCart/AddToCart";
import ProductPage from './components/ProductPage/ProductPage';
import topLogo from './assets/top-logo/top-logo.jpg';
import { BiCartAdd } from "react-icons/bi";

// Cart Icon Component
function CartIcon() {
  const { cart } = useCart();

  return (
    <div className="relative">
      <BiCartAdd className="text-2xl text-[#636563]" />
      {cart.count > 0 && (
        <span className="absolute -top-2 -right-2 bg-[#012f49] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {cart.count}
        </span>
      )}
    </div>
  );
}

// App Component
function App() {
  return (
    <CartProvider>
      <div className="flex justify-between items-center px-4 py-2">
        {/* Center the logo */}
        <div className="flex-1 flex justify-center">
          <img src={topLogo} alt="Logo" className="w-[265px] h-[40px]" />
        </div>

        {/* Cart Icon aligned to the right */}
        <div className="relative">
          <CartIcon />
        </div>
      </div>

      <ProductPage />
    </CartProvider>
  );
}

export default App;

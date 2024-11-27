



import React, { useState, useEffect } from "react";
import { useCart } from "../AddToCart/AddTocart";


const ProductDetails = ({ selectedColor, setSelectedColor }) => {
  const [selectedPurity, setSelectedPurity] = useState("14kt");
  const [selectedSize, setSelectedSize] = useState("6");
  const [price, setPrice] = useState(120943); // Default price

  const { addToCart } = useCart();

  const sizes = Array.from({ length: 21 }, (_, i) => (i + 6).toString()); // Ring sizes

  // Price mapping
  const priceMap = {
    "14kt": 120943, 
    "18kt": 145000, 
  };

  const sizeIncrementMap = {
    "14kt": 1000, 
    "18kt": 1400, 
  };

  // Function to calculate the price dynamically
  const calculatePrice = (purity, size) => {
    const basePrice = priceMap[purity];
    const sizeIncrement = sizeIncrementMap[purity];
    const sizeDifference = parseInt(size) - 10; // Size 6 is the base
    return basePrice + sizeDifference * sizeIncrement;
  };

  useEffect(() => {
    setPrice(calculatePrice(selectedPurity, selectedSize));
  }, [selectedPurity, selectedSize]);

  // SKU mapping based on color
  const skuMap = {
    pink: "WRI156614RG10",
    gray: "WRI156614WG10",
    gold: "WRI156614YG10",
  };

  return (
    <div className="p-6 text-left max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <div className="text-sm text-black mb-1 text-[16px]">
        Home {" » "}
        <span className="text-gray-700 ">Unwavering Devotion Diamond Band Ring</span>
      </div>
      <div>
        {/* Dynamically render SKU based on selected color */}
        <span className="text-black text-[12px]">SKU: {skuMap[selectedColor]}</span>
      </div>

      {/* Title and Price */}
      <h1 className="text-3xl font-semibold text-gray-800 mt-2 text-[24px]">
        Unwavering Devotion Diamond Band Ring
      </h1>
      <p className="text-4xl font-bold text-gray-800 mt-2 text-[32px]">₹{price.toLocaleString()}</p>
      <p className="text-gray-500 mt-1">
        Price inclusive of taxes. See the full{" "}
        <a href="#" className="text-[#3d8dbe]">
          price breakup
        </a>
        <br>
        </br>
        <a href="" className="text-[#3d8dbe] text-[12px]">Loyalty Special offer for you</a>
      </p>

      {/* Offer Section */}
      <div className="mt-6 p-2 bg-[#3455A4] flex items-center justify-between rounded-md">
        <p className="font-medium text-white mt-3">
          GET IT FOR ₹{(price * 0.85).toLocaleString()}{" "}
          <span className="font-bold text-white">Use SOLI20</span>
        </p>
        <div className="mt-2 flex items-center gap-2">
          <button className="bg-white text-sm rounded   text-[#3d8ebe] py-1 px-3 mx-2">
            Apply
          </button>
          <button className="bg-white text-sm rounded text-[#3d8ebe] py-1 px-3">
            More Offers
          </button>
        </div>
      </div>

      {/* Color Section */}
      <div className="mt-6 flex items-center gap-6">
        <p className="text-sm text-gray-800 font-medium">COLOR</p>
        {["pink", "gray", "gold"].map((color) => (
          <button
            key={color}
            className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? "ring-2 ring-black" : ""}`}
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>

      {/* Purity */}
      <div className="mt-6">
        <div className="flex items-center gap-6">
          <p className="text-sm text-gray-800 font-medium">PURITY</p>
          {["14kt", "18kt"].map((purity) => (
            <button
              key={purity}
              className={`px-6 py-2 border rounded ${selectedPurity === purity
                ? "bg-gray-800 text-white border-gray-800"
                : "bg-white text-gray-800 border-gray-300"
                }`}
              onClick={() => setSelectedPurity(purity)}
            >
              {purity}
            </button>
          ))}
        </div>
      </div>

      {/* Ring Size */}
      <div className="mt-6">
        <div className="flex items-center gap-6">
          <p className="text-sm text-gray-800 font-medium">RING SIZE</p>
          <select
            className="px-4 py-2 border rounded w-20 text-gray-800"
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          <button
            className="text-sm text-gray-600 underline"
            onClick={() => setSelectedSize("")}
          >
            Clear
          </button>
        </div>
        <p className="text-sm text-[#3d8ebe] mt-1 cursor-pointer">
          Ring Size Guide
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-6">
        <button className="flex-1 py-3 bg-[#012F49] text-white font-medium rounded-lg hover:bg-[#024563] transition" onClick={addToCart}>
          ADD TO CART
        </button>
        <button className="flex-1 py-3 bg-[#012F49] text-white font-medium rounded-lg hover:bg-[#024563] transition">
          BUY NOW
        </button>
      </div>

      {/* Delivery Information */}
      <div className="mt-6 text-sm text-gray-600">
        <a href="#" className="underline text-gray-800">
          DELIVERY & CANCELLATION
        </a>
        <p className="mt-2">ESTIMATED DELIVERY BY 21ST DEC 2024</p>
      </div>
    </div>
  );
};

export default ProductDetails;

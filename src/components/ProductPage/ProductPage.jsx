import React, { useState } from "react";
import ProductDetails from "../ProductDetalis/ProductDetalis";
import ZoomImage from "../Zoomable/Zoomable";

// Import all ring images
import Rings1 from "../../assets/Rings/Rings1.jpg";

import RoseGoldImg1 from "../../assets/PinkRings/PinkRings1.jpg";
import RoseGoldImg2 from "../../assets/PinkRings/PinkRings2.jpg";
import RoseGoldImg3 from "../../assets/PinkRings/PinkRings3.jpg";
import RoseGoldImg4 from "../../assets/PinkRings/PinkRings4.jpg";
import RoseGoldImg5 from "../../assets/PinkRings/PinkRings5.jpg";
import RoseGoldImg6 from "../../assets/PinkRings/PinkRings6.jpg";

import WhiteGoldImg1 from "../../assets/Chinese silver/Chinesesilver1.jpg";
import WhiteGoldImg2 from "../../assets/Chinese silver/Chinesesilver2.jpg";
import WhiteGoldImg3 from "../../assets/Chinese silver/Chinesesilver3.jpg";
import WhiteGoldImg4 from "../../assets/Chinese silver/Chinesesilver4.jpg";
import WhiteGoldImg5 from "../../assets/Chinese silver/Chinesesilver5.jpg";
import WhiteGoldImg6 from "../../assets/Chinese silver/Chinesesilver6.jpg";

import GoldRingImg1 from "../../assets/GoldRings/GoldRings1.jpg";
import GoldRingImg2 from "../../assets/GoldRings/GoldRings2.jpg";
import GoldRingImg3 from "../../assets/GoldRings/GoldRings3.jpg";
import GoldRingImg4 from "../../assets/GoldRings/GoldRings4.jpg";
import GoldRingImg5 from "../../assets/GoldRings/GoldRings5.jpg";
import GoldRingImg6 from "../../assets/GoldRings/GoldRings6.jpg";





const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(Rings1);
  const [selectedColor, setSelectedColor] = useState("pink");

  const imagesByColor = {
    pink: [RoseGoldImg1, RoseGoldImg2, RoseGoldImg3, RoseGoldImg4, RoseGoldImg5, RoseGoldImg6],
    gray: [WhiteGoldImg1, WhiteGoldImg2, WhiteGoldImg3, WhiteGoldImg4, WhiteGoldImg5, WhiteGoldImg6],
    gold: [GoldRingImg1, GoldRingImg2, GoldRingImg3, GoldRingImg4, GoldRingImg5, GoldRingImg6],
  };

  const currentImages = imagesByColor[selectedColor];

  return (
    <div className="p-8">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Section: Image Section */}
        <div className="flex flex-col md:flex-row gap-4 flex-1">
          {/* Sidebar Thumbnails */}
          <div className="flex flex-row md:flex-col gap-2">
            {currentImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`w-20 h-20 cursor-pointer object-cover border-2 ${
                  selectedImage === img
                    ? "border-blue-500" // Highlight selected image
                    : "border-transparent opacity-50 hover:opacity-100"
                } transition-opacity duration-300`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Main Display Image */}
          <div className="w-full md:w-[700px] h-[700px]">
            {/* Fancybox for displaying the image in a lightbox */}
            <a data-fancybox="gallery" href={selectedImage}>
              <ZoomImage src={selectedImage} />
            </a>
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="flex flex-col">
          <ProductDetails
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

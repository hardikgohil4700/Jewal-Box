import React from "react";

const ZoomImage = ({ src }) => {
  const zoom = (e) => {
    const zoomer = e.currentTarget;
    const { offsetX, offsetY } = e.nativeEvent;
    const { offsetWidth, offsetHeight } = zoomer;

    const x = (offsetX / offsetWidth) * 100;
    const y = (offsetY / offsetHeight) * 100;

    zoomer.style.backgroundPosition = `${x}% ${y}%`;
  };

  return (
    <figure
      className="zoom"
      onMouseMove={zoom}
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "200%", // Ensures zoom
        backgroundRepeat: "no-repeat",
        cursor: "pointer", // Adds cursor pointer on hover
      }}
    >
      {/* Invisible image for accessibility */}
      <img src={src} alt="Zoomable" className="opacity-0 w-full h-full" />
    </figure>
  );
};

export default ZoomImage;

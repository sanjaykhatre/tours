import React from "react";

function Banner({ imageUrl, imageAlt }) {
  return (
    <div className="banner-container">
      <div className="banner-image">
        <img src={imageUrl} alt={imageAlt}  className="w-100"/>
      </div>
    </div>
  );
}

export default Banner;

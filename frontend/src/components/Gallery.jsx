import React from "react";

const images = [
  "/images/crisis1.jpg",
  "/images/crisis2.jpg",
  "/images/crisis3.jpg",
  "/images/crisis4.jpg",
];

const Gallery = () => {
  return (
    <div className="row g-3">
      {images.map((img, idx) => (
        <div key={idx} className="col-md-3">
          <img src={img} alt={`Gallery ${idx}`} className="img-fluid rounded shadow-sm" />
        </div>
      ))}
    </div>
  );
};

export default Gallery;

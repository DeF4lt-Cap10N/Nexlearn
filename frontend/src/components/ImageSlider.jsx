import React, { useState, useEffect } from "react";

import img1 from "../assets/pexels-bri-schneiter-28802-346529.jpg";
import img2 from "../assets/pexels-pixabay-247599.jpg";
import img3 from "../assets/pexels-pixabay-462162.jpg";
import img4 from "../assets/pexels-samandgos-709552.jpg";

const images = [img1, img2, img3, img4];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full md:max-w-[1200px] mx-auto mt-10 h-screen">
      <div className="relative w-full max-w-5xl mx-auto mt-10 flex justify-center items-center">
        <div className="rounded-3xl overflow-hidden w-full aspect-[16/9]">
          <img
            src={images[current]}
            alt={`Slide ${current}`}
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </div>

      <div className="flex justify-center mt-3 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full ${
              current === index ? "bg-blue" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

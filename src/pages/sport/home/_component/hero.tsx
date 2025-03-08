// src/components/Hero.tsx

import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import IMAGES from "../../../../assets/images";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const navigate = useNavigate();
  const slides = [
    {
      image: IMAGES.hero1,
      text: "Place your bet",
      text1:
        "Experience the Thrill, Elevate the Game: Your Winning Journey Begins Here!",
    },
    {
      image: IMAGES.hero2,
      text: "Place your bet",
      text1:
        "Experience the Thrill, Elevate the Game: Your Winning Journey Begins Here!",
    },
    {
      image: IMAGES.hero3,
      text: "Place your bet",
      text1:
        "Experience the Thrill, Elevate the Game: Your Winning Journey Begins Here!",
    },
    {
      image: IMAGES.hero4,
      text: "Place your bet",
      text1:
        "Experience the Thrill, Elevate the Game: Your Winning Journey Begins Here!",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((activeSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [activeSlide, slides.length]);

  return (
    <div className="relative w-full h-[200px] md:h-[300px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity ${
            activeSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center ">
            <div className=" space-y-4 w-1/2 uppercase ml-8">
              <h2 className="text-2xl md:text-4xl font-bold text-white">
                {slide.text}
              </h2>
              <p className="text-white font-medium">{slide.text1}</p>
              <button
                onClick={() => navigate("/search")}
                className="bg-primary text-white py-2 px-4  font-bold rounded"
              >
                Shop
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute inset-x-0 bottom-4 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              activeSlide === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;

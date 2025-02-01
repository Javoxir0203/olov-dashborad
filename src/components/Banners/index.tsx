"use client";
import React, { useState } from 'react';

const slides = [
  {
    title: "Har kuni foyda",
    buttonText: "Xaridlarga",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=80&w=800",
    bgColor: "bg-violet-100"
  },
  {
    title: "Yetkazib berish",
    buttonText: "Buyurtma berish",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    bgColor: "bg-blue-100"
  }
];

const BannerBoxes =()=> {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
      <div className="relative w-full max-w-6xl h-[600px] overflow-hidden rounded-2xl shadow-xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`w-full h-full ${slide.bgColor} flex items-center p-10 rounded-2xl`}>
              <div className="w-1/2">
                <h1 className="text-6xl font-bold text-violet-800 mb-6" style={{ fontFamily: 'system-ui' }}>
                  {slide.title}
                </h1>
                <button className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg shadow-md hover:bg-pink-600 transition-all">
                  {slide.buttonText}
                </button>
              </div>
              <div className="w-1/2">
                <img
                  src={slide.image}
                  alt="Banner"
                  className="w-full h-[400px] object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all"
        >
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-all"
        >
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all border border-violet-600 ${
                index === currentSlide ? 'bg-violet-600' : 'bg-transparent'
              }`}
            />
          ))}
        </div>
      </div>
  );
}
export default BannerBoxes;

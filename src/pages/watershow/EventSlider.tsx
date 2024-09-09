import React, { useState } from "react";
import "./EventSlider.css"; // CSS for 3D styling
import banner_1 from "../../assets/banner_sukien_1.png";
import banner_2 from "../../assets/banner_sukien_2.png";
import banner_3 from "../../assets/banner_sukien_3.png";
import banner_4 from "../../assets/banner_sukien_4.png";
import banner_5 from "../../assets/banner_sukien_5.png";

const slides = [
  { id: 1, image: banner_1, title: "Event 1", description: "Description 1" },
  { id: 2, image: banner_2, title: "Event 2", description: "Description 2" },
  { id: 3, image: banner_3, title: "Event 3", description: "Description 3" },
  { id: 4, image: banner_4, title: "Event 4", description: "Description 4" },
  { id: 5, image: banner_5, title: "Event 5", description: "Description 5" },
];

const EventSlider3D: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider-3d-container">
      <div className="slider-3d">
        {slides.map((slide, index) => {
          const relativeIndex = (index - activeIndex + slides.length) % slides.length;
          const isCenter = relativeIndex === 0;
          const isLayer2 = relativeIndex === 1 || relativeIndex === slides.length - 1;
          const isLayer3 = relativeIndex === 2 || relativeIndex === slides.length - 2;

          let translateX = "0";
          let scale = 1;
          if (isLayer2) {
            translateX = relativeIndex === 1 ? "-30%" : "30%";
            scale = 0.8;
          } else if (isLayer3) {
            translateX = relativeIndex === 2 ? "-40%" : "40%";
            scale = 0.5;
          }

          const opacity =
            isCenter ? 1 : isLayer2 ? 0.8 : isLayer3 ? 0.5 : 0;

          return (
            <div
              key={slide.id}
              className={`slide-3d ${isCenter ? "center-slide" : ""}`}
              style={{
                transform: `translateX(${translateX}) scale(${isCenter ? 1 : 0.8})`,
                opacity: opacity,
                transition: "transform 0.5s ease, opacity 0.5s ease",
              }}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="slide-image"
              />
              <div className="slide-content">
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <button className="prev-btn" onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.62155 10.5001H21.5002V13.5001H8.62155L13.5609 18.4395L11.4396 20.5608L2.87891 12.0001L11.4396 3.43945L13.5609 5.56077L8.62155 10.5001Z"
            fill="#259E58"
          />
        </svg>
      </button>
      <button className="next-btn" onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.9775 13.5573H3.42383V10.4432H15.9775L11.1628 5.31619L13.2306 3.11426L21.5752 12.0002L13.2306 20.8862L11.1628 18.6843L15.9775 13.5573Z"
            fill="#259E58"
          />
        </svg>
      </button>
    </div>
  );
};

export default EventSlider3D;

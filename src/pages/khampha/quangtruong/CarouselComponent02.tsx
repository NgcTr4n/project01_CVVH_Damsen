import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselComponent.css";

import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchQuangtruongslider3 } from "../../../features/quangtruongslider3Slice";

interface CarouselComponentProps {}

const NextArrow: React.FC<any> = ({ onClick }) => (
  <div className="slick-arrow slick-next" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="M41.6665 29.1641L60.4165 49.9974L41.6665 70.8307"
        stroke="#259E58"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const PrevArrow: React.FC<any> = ({ onClick }) => (
  <div className="slick-arrow slick-prev" onClick={onClick}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="M58.3335 29.1641L39.5835 49.9974L58.3335 70.8307"
        stroke="#259E58"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);


const CarouselComponent: React.FC<CarouselComponentProps> = () => {
  const [currentSlide, setCurrentSlide] = useState(0); 
  const mainSliderRef = useRef<Slider | null>(null);
  const navSliderRef = useRef<Slider | null>(null);
  const dispatch = useAppDispatch();
  const { quangtruongslider3, loading, error } = useAppSelector((state) => state.quangtruongslider3);

  useEffect(() => {
    dispatch(fetchQuangtruongslider3());
  }, [dispatch]);

  useEffect(() => {
    if (mainSliderRef.current && navSliderRef.current) {
      mainSliderRef.current.slickGoTo(currentSlide);
      navSliderRef.current.slickGoTo(currentSlide);
    }
  }, [currentSlide]);

  const mainSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  const navSliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    focusOnSelect: true,
    swipeToSlide: true,
    centerMode: true, 
    variableWidth: true, 
    beforeChange: (oldIndex: number, newIndex: number) => {
      setCurrentSlide(newIndex);
    },
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentSlide(index);
    
  };



  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="carousel-container">
      <Slider {...mainSliderSettings} ref={mainSliderRef}>
        {quangtruongslider3.map((image, index) => (
          <div key={index}>
            <img
              src={image.imageUrl}
              alt={`slide-${index}`}
              className="main-image"
            />
            <div className="caption">
              {quangtruongslider3[currentSlide]?.description || "No description available"}
            </div>
          </div>
        ))}
      </Slider>
      <div className="thumbnail-slider-wrapper">
        <Slider {...navSliderSettings} ref={navSliderRef}>
          {quangtruongslider3.map((image, index) => (
            <div
              className="thumbnail-image-wrapper"
              key={index}
              onClick={() => handleThumbnailClick(index)}
              style={{
                width: '246px',
                height: '164px',
              }}
            >
              <img
                src={image.imageUrl}
                alt={`slide-${index}`}
                className="thumbnail-image"
                style={{
                  opacity: currentSlide === index ? 1 : 0.4,
                  filter: currentSlide === index ? 'brightness(100%)' : 'brightness(35%)',
                  borderColor: currentSlide === index ? 'magenta' : 'transparent',
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CarouselComponent;

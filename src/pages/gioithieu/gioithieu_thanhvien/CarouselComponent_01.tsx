import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CarouselComponent.css";
import slide_cf01 from '../../../assets/Thanhvien/slide_cf_01.png'
import slide_cf02 from '../../../assets/Thanhvien/slide_cf_02.png'
import slide_cf03 from '../../../assets/Thanhvien/slide_cf_03.png'
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchThanhviencf } from "../../../features/thanhviencfSlice";

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
  const dispatch = useAppDispatch();
  const { thanhviencf, loading, error } = useAppSelector((state) => state.thanhviencf);

  useEffect(() => {
    dispatch(fetchThanhviencf());
  }, [dispatch]);

  useEffect(() => {
    console.log("Redux State - services: ", thanhviencf); 
  }, [thanhviencf]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex: number, newIndex: number) => setCurrentSlide(newIndex), 
    customPaging: (i: number) => (
      <img
        src={thanhviencf[i].imageUrl}
        alt={`thumbnail-${i}`}
        className="thumbnail-image"
      />
    ),
    dotsClass: "slick-dots custom-thumb-dots",
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {thanhviencf.map((image, index) => (
          <div key={index}>
            <img
              src={image.imageUrl}
              alt={`slide-${index}`}
              className="main-image"
            />
          </div>
        ))}
      </Slider>
      <div className="caption">{thanhviencf[currentSlide]?.description || "No description available"}</div>
    </div>
  );
};

export default CarouselComponent;

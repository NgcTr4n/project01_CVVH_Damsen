import React, { useEffect, useState } from "react";
import "./EventSlider.css"; // CSS for 3D styling
// import banner_1 from "../../assets/banner_sukien_1.png";
// import banner_2 from "../../assets/banner_sukien_2.png";
// import banner_3 from "../../assets/banner_sukien_3.png";
// import banner_4 from "../../assets/banner_sukien_4.png";
// import banner_5 from "../../assets/banner_sukien_5.png";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchSukienSlider } from "../../features/sukiensliderSlice";

// const slides = [
//   {
//     id: 1,
//     image: banner_1,
//     title: "Sắp ra mắt nhạc nước Đầm Sen Water Show",
//     description:
//       "CVVH Đầm Sen chuẩn bị ra mắt công trình nhạc nước Đầm Sen Water Show với tổng chiều dài biểu diễn hơn 100 mét, kết hợp với khói lửa,.....",
//   },
//   {
//     id: 2,
//     image: banner_2,
//     title: "Sắp ra mắt nhạc nước Đầm Sen Water Show",
//     description:
//       "CVVH Đầm Sen chuẩn bị ra mắt công trình nhạc nước Đầm Sen Water Show với tổng chiều dài biểu diễn hơn 100 mét, kết hợp với khói lửa,.....",
//   },
//   {
//     id: 3,
//     image: banner_3,
//     title: "Sắp ra mắt nhạc nước Đầm Sen Water Show",
//     description:
//       "CVVH Đầm Sen chuẩn bị ra mắt công trình nhạc nước Đầm Sen Water Show với tổng chiều dài biểu diễn hơn 100 mét, kết hợp với khói lửa,.....",
//   },
//   {
//     id: 4,
//     image: banner_4,
//     title: "Sắp ra mắt nhạc nước Đầm Sen Water Show",
//     description:
//       "CVVH Đầm Sen chuẩn bị ra mắt công trình nhạc nước Đầm Sen Water Show với tổng chiều dài biểu diễn hơn 100 mét, kết hợp với khói lửa,.....",
//   },
//   {
//     id: 5,
//     image: banner_5,
//     title: "Sắp ra mắt nhạc nước Đầm Sen Water Show",
//     description:
//       "CVVH Đầm Sen chuẩn bị ra mắt công trình nhạc nước Đầm Sen Water Show với tổng chiều dài biểu diễn hơn 100 mét, kết hợp với khói lửa,.....",
//   },
// ];

const EventSlider3D: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const dispatch = useAppDispatch();
const { sukienslider, loading, error } = useAppSelector((state) => state.sukienslider);


useEffect(() => {
  dispatch(fetchSukienSlider());
}, [dispatch]);

useEffect(() => {
  console.log("Redux State - services: ", sukienslider); // Kiểm tra dữ liệu Redux
}, [sukienslider]);

if (loading) {
  return <div>Loading...</div>;
}

if (error) {
  return <div>Error: {error}</div>;
}

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % sukienslider.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? sukienslider.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider-3d-container">
      <div className="slider-3d">
        {sukienslider.map((slide, index) => {
          const relativeIndex =
            (index - activeIndex + sukienslider.length) % sukienslider.length;
          const isCenter = relativeIndex === 0;
          const isLayer2 =
            relativeIndex === 1 || relativeIndex === sukienslider.length - 1;
          const isLayer3 =
            relativeIndex === 2 || relativeIndex === sukienslider.length - 2;

          let translateX = "0";
          let translateZ = "0";
          let zIndex = "9";
          let scale = 1;

          if (isLayer2) {
            translateX = relativeIndex === 1 ? "-16%" : "16%";
            translateZ = "-90px";
            scale = 0.9;
            zIndex = "8";
          } else if (isLayer3) {
            translateX = relativeIndex === 2 ? "-26%" : "26%";
            translateZ = "-400px";
            scale = 0.8;
            zIndex = "7";
          }

          const opacity = isCenter ? 1 : isLayer2 ? 0.7 : isLayer3 ? 0.6 : 0;

          return (
            <div
              key={slide.id}
              className={`slide-3d ${isCenter ? "center-slide" : ""}`}
              style={{
                transform: `translateX(${translateX}) translateZ(${translateZ}) scale(${scale})`,
                opacity: opacity,
                zIndex: zIndex,
                transition: "transform 0.5s ease, opacity 0.5s ease",
              }}
            >
              <img
                src={slide.imageUrl}
                alt={slide.title}
                className="slide-image"
              />
              {isCenter && (
                <div className="slide-content">
                  <div className="slide-content_1">
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                  </div>
                  <div className="btn_xemthem_1">
                    <a>
                      Xem thêm{" "}
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                        >
                          <path
                            d="M20.625 15L15.625 10M20.625 15L15.625 20M20.625 15L6.5625 15"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="slider_bottom">
        <div className="prev-btn" onClick={prevSlide}>
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
        </div>
        <div className="dots-container">
          {sukienslider.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === activeIndex ? "active-dot" : ""}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
        <div className="next-btn" onClick={nextSlide}>
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
        </div>
      </div>
    </div>
  );
};

export default EventSlider3D;

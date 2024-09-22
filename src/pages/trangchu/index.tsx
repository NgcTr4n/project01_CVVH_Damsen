import React, {useState, useRef} from "react";
import Layout from "../../layout";
import Slider from "react-slick";
import Rectangle1525 from "../../assets/Rectangle1525.png";
import Rectangle1524 from "../../assets/Rectangle1524.png";
import logo from "../../assets/logo.png";
import "./trangchu.css";
import { Link } from "react-router-dom";
const images = [Rectangle1525, Rectangle1524];

const Trangchu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setActiveIndex(newIndex); 
    },
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: "absolute", marginBottom: "61px", marginTop: "20px", zIndex: 30 }}>
        <ul style={{ display: "flex", justifyContent: "center" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className={`slick-dot ${i === activeIndex ? 'active' : ''}`} />
    )
  };
  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
      console.log("Previous slide"); // Log for debugging
    } else {
      console.log("Slider ref is null");
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
      console.log("Next slide"); 
    } else {
      console.log("Slider ref is null");
    }
  };
  return (
    <Layout>
      <div className="home_banner">
        <Slider {...settings} ref={sliderRef}>
          {images.map((image, index) => (
            <div className="home_img" key={index}>
              <img src={image} alt={`Banner ${index}`} />
            </div>
          ))}
        </Slider>
        <div className="home_container">
          <div className="home_left" onClick={handlePrevClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <g opacity="0.6">
                <rect width="64" height="64" rx="32" fill="white" />
                <path
                  d="M36.333 18.6641L24.333 31.9974L36.333 45.3307"
                  stroke="#259E58"
                  stroke-width="6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>{" "}
          </div>
          <div className="home_mid">
            <div className="home_logo">
              <img src={logo} />
            </div>
            <div className="home_btn">
              <Link to="/khampha" className="btn_khamphangay">Khám Phá Ngay</Link>
            </div>
          </div>
          <div className="home_right">
            <div></div>
            <div className="arrow_right" onClick={handleNextClick}>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
              >
                <g opacity="0.6">
                  <rect
                    x="64"
                    y="64"
                    width="64"
                    height="64"
                    rx="32"
                    transform="rotate(180 64 64)"
                    fill="white"
                  />
                  <path
                    d="M27.667 45.3359L39.667 32.0026L27.667 18.6693"
                    stroke="#259E58"
                    stroke-width="6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
            <div className="icon_right">
              {/* <div className="icon_phone">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M28 7.33333C28 18.7472 18.7472 28 7.33333 28C6.81837 28 6.30781 27.9812 5.8023 27.9441C5.22216 27.9017 4.93209 27.8804 4.66804 27.7284C4.44935 27.6025 4.24194 27.3793 4.13234 27.152C4 26.8776 4 26.5575 4 25.9173V22.1609C4 21.6226 4 21.3534 4.0886 21.1226C4.16687 20.9188 4.29399 20.7373 4.4588 20.5941C4.64538 20.432 4.89834 20.34 5.40427 20.156L5.40428 20.156L9.68006 18.6012C10.2687 18.3871 10.563 18.2801 10.8423 18.2983C11.0885 18.3143 11.3254 18.3983 11.5267 18.541C11.755 18.7029 11.9162 18.9714 12.2384 19.5085L13.3333 21.3333C16.8665 19.7332 19.7308 16.8652 21.3333 13.3333L19.5085 12.2384C18.9714 11.9162 18.7029 11.755 18.541 11.5267C18.3983 11.3254 18.3143 11.0885 18.2983 10.8423C18.2801 10.563 18.3871 10.2687 18.6012 9.68008L18.6012 9.68006L20.156 5.40428C20.34 4.89835 20.432 4.64538 20.5941 4.4588C20.7373 4.29399 20.9188 4.16686 21.1226 4.0886C21.3534 4 21.6226 4 22.1609 4H25.9173C26.5575 4 26.8776 4 27.152 4.13234C27.3793 4.24194 27.6025 4.44935 27.7284 4.66804C27.8804 4.93209 27.9017 5.22216 27.9441 5.8023C27.9812 6.30781 28 6.81837 28 7.33333Z"
                    fill="#259E58"
                  />
                </svg>
              </div>
              <div className="icon_mess">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16.0023 2.66699C8.49177 2.66699 2.66699 8.16891 2.66699 15.6018C2.66699 19.4895 4.26086 22.8478 6.85397 25.1671C7.06955 25.3623 7.20135 25.6321 7.21157 25.9262L7.28513 28.2997C7.29041 28.4742 7.33852 28.6447 7.42523 28.7962C7.51194 28.9478 7.63459 29.0757 7.78237 29.1686C7.93014 29.2615 8.09851 29.3167 8.27263 29.3294C8.44676 29.3419 8.62133 29.3115 8.78091 29.2407L11.4282 28.0739C11.654 27.9758 11.9043 27.9565 12.1393 28.0198C13.3551 28.3538 14.6497 28.5347 15.9983 28.5347C23.5089 28.5347 29.3337 23.0338 29.3337 15.6009C29.3337 8.16891 23.5099 2.66699 16.0023 2.66699ZM23.0042 12.7717L19.6653 18.0673C19.5395 18.2666 19.3739 18.4378 19.1789 18.5699C18.9838 18.7021 18.7635 18.7925 18.5318 18.8353C18.3001 18.8781 18.0621 18.8723 17.8326 18.8186C17.6031 18.7649 17.3874 18.6642 17.1989 18.523L14.5423 16.5326C14.4241 16.4442 14.2803 16.3965 14.1326 16.3965C13.985 16.3965 13.8413 16.4442 13.723 16.5326L10.1388 19.2534C9.66367 19.6162 9.03532 19.043 9.3541 18.5382L12.693 13.2427C12.8187 13.0434 12.9843 12.8722 13.1794 12.7401C13.3745 12.6079 13.5947 12.5176 13.8265 12.4748C14.0582 12.4319 14.2962 12.4376 14.5257 12.4913C14.7551 12.5451 14.9709 12.6458 15.1594 12.787L17.8159 14.7774C17.9342 14.8657 18.0779 14.9135 18.2257 14.9135C18.3733 14.9135 18.517 14.8657 18.6353 14.7774L22.2195 12.0565C22.6997 11.6887 23.3281 12.2619 23.0042 12.7717Z"
                    fill="#259E58"
                  />
                </svg>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Trangchu;

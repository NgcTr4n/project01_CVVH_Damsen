import React from 'react'
import Layout from '../../layout'
import Slider from 'react-slick'
import Rectangle1525 from '../../assets/Rectangle1525.png';
import Rectangle1524 from '../../assets/Rectangle1524.png';
import './trangchu.css'
const images = [
  Rectangle1525,
  Rectangle1524,
  
];

const Trangchu = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  return <Layout>
    <div className='home_banner'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} >
            <img src={image} alt={`Banner ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  </Layout>
}

export default Trangchu

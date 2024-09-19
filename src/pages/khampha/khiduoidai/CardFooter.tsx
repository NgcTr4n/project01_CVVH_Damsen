import React, { useEffect } from "react";
import "./CardFooter.css";
import card_footer1 from "../../../assets/sukien_card_footer1.png";
import tag_icon from '../../../assets/tag-icon.svg'
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchKhiduoidai } from "../../../features/khiduoidaiSlice_footer";

const CardFooter: React.FC = () => {
  const dispatch = useAppDispatch();
  const { khiduoidai, loading, error } = useAppSelector((state) => state.khiduoidai);

  
  useEffect(() => {
    dispatch(fetchKhiduoidai());
  }, [dispatch]);

  useEffect(() => {
    console.log("Redux State - services: ", khiduoidai); // Kiểm tra dữ liệu Redux
  }, [khiduoidai]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="sukien-footer-container">
      <div className="sukien-carousel">
      <div className="nav-button prev">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M28 14L19 24L28 34"
              stroke="#259E58"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="card-container">
          {khiduoidai.map((card, index) => (
            <div key={index} className="card_sk">
              <img style={{width: '310px', height:'200px'}} src={card.imageUrl} alt={card.title} className="card-image" />
              <div className="card_sk_tg">
              <h3 className="card-title_sk">{card.title}</h3>
              <p className="card-date_sk">{card.date}</p>
              </div>
              <p className="card-description_sk">
                <span className="icon-location"><img src={tag_icon} alt="" /></span>
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <div className="nav-button next">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
          >
            <path
              d="M20 34L29 24L20 14"
              stroke="#259E58"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="btn_footer_sukien">
      </div>
    </div>
  );
};

export default CardFooter;

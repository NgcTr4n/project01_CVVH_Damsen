import React from "react";
import "./CardFooter.css";
import card_footer1 from "../../assets/sukien_card_footer1.png";
import tag_icon from '../../assets/tag-icon.svg'

const CardFooter: React.FC = () => {
  const cards = [
    {
      title: "Roller Coaster",
      date: "10/02/2020",
      description: "Cảm giác mạnh",
      image: card_footer1, 
    },
    {
      title: "Vòng xoay không gian",
      date: "11/02/2020",
      description: "Cảm giác mạnh",
      image: card_footer1, 
    },
    {
      title: "Vòng quay thần tốc",
      date: "12/02/2020",
      description: "Cảm giác mạnh",
      image: card_footer1, 
    },
    {
      title: "Cá chép nhào lộn",
      date: "11/02/2020",
      description: "Cảm giác mạnh",
      image: card_footer1, 
    },
  ];

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
          {cards.map((card, index) => (
            <div key={index} className="card_sk">
              <img style={{width: '310px', height:'200px'}} src={card.image} alt={card.title} className="card-image" />
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

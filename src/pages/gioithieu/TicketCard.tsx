import React from "react";
import "./TicketCard.css";
import arrow_icon from "../../assets/arrow-narrow-up.svg";

interface TicketCardProps {
  title: string;
  price: string;
  description: string;
  buttonText: string;
  imageUrl: string;
  backgroundColor: string;
  bgColor:string
  textColor: string;
  svgColor: string;
}

const TicketCard: React.FC<TicketCardProps> = ({
  title,
  price,
  description,
  buttonText,
  imageUrl,
  backgroundColor,
  bgColor,
  textColor,
  svgColor,
}) => {
  
  return (
    <div className="ticket-card" style={{ backgroundColor }}>
      <div className="ticket-card-content">
        <div className="ticket-card-imgbg">
          <div className="ticket-card-bg" style={{backgroundColor: bgColor}}>
          <img src={imageUrl} alt={title} className="ticket-card-image" />

          </div>
        </div>
        <div className="ticket-card-info">
          <h3>{title}</h3>
          <h6>{price}</h6>
          <p>{description}</p>
          <button style={{ color: textColor, borderColor: textColor }}>
            {buttonText}{" "}
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
                  stroke={svgColor}
                  stroke-width="2.19373"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;

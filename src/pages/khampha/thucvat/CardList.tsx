import React, { useEffect } from "react";
import "./CardList.css";
import sukien_card1 from '../../../assets/sukien_card1.png'
import icon_tag from '../../../assets/tag-icon.svg'
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchThucvatCard } from "../../../features/thucvatSlice";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  date: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, link, date }) => {
  
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <h6>{description}</h6>
      </div>
      <div className="card-footer">
        <div className="card-footer-content">
           <div className="card-footer-content-sk">
           <img src={icon_tag} alt="" /> <span><h6>Sự kiện</h6></span>
           </div>
           <div className="card-footer-content-sk">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M10 5.83333V10L12.0833 11.25M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg><span><p>06/11/2020</p></span>
</div>
        </div>
        <div className="card-footer-btn">
        <a href={link} target="_blank" rel="noopener noreferrer">
          Xem thêm
          <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M13.75 10.0003L10.4167 6.66699M13.75 10.0003L10.4167 13.3337M13.75 10.0003L4.375 10.0003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
        </a>
        </div>
      </div>
    </div>
  );
};

const CardList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { thucvatcard, loading, error } = useAppSelector((state) => state.thucvatcard);

  
  useEffect(() => {
    dispatch(fetchThucvatCard());
  }, [dispatch]);

  useEffect(() => {
    console.log("Redux State - services: ", thucvatcard); 
  }, [thucvatcard]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="card-list">
      {thucvatcard.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          link={card.link}
          date={card.date}
        />
      ))}
    </div>
  );
};

export default CardList;

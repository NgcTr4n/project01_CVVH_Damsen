import React, { useEffect } from "react";
import "./CardList.css";
// import sukien_card1 from '../../assets/sukien_card1.png'
import icon_tag from '../../assets/tag-icon.svg'
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchWatershows } from "../../features/watershowSlice";

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
        {/* <p className="card-date">{date}</p> */}
      </div>
      <div className="card-footer">
        <div className="card-footer-content">
           <div className="card-footer-content-sk">
           <img src={icon_tag} alt="" /> <span><h6>Sự kiện</h6></span>
           </div>
           <div className="card-footer-content-sk">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M10 5.83333V10L12.0833 11.25M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg><span><p>{date}</p></span>
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
  // const cardsData = [
  //   {
  //     title: "Ra mắt về Đầm Sen Special chơi cả 2 công viên",
  //     description: "Loạt sự kiện và chương trình đặc biệt diễn ra chào đón năm mới 2020.",
  //     imageUrl: sukien_card1,
  //     link: "/watershow/watershow_1",
  //     date: "06/11/2020",
  //   },
  //   {
  //     title: "Sắp ra mắt Đầm Sen Lake Show cuối năm 2020",
  //     description: "Công viên văn hóa Đầm Sen sẽ trình diễn show nhạc nước lớn nhất từ trước đến nay.",
  //     imageUrl: sukien_card1,
  //     link: "#",
  //     date: "05/11/2020",
  //   },
  //   {
  //     title: "Lễ hội củng cúng",
  //     description: "Chuỗi sự kiện đặc biệt trong tháng lễ hội cuối năm.",
  //     imageUrl: sukien_card1,
  //     link: "#",
  //     date: "07/12/2018",
  //   },
  //   {
  //       title: "Lễ hội củng cúng",
  //       description: "Chuỗi sự kiện đặc biệt trong tháng lễ hội cuối năm.",
  //       imageUrl: sukien_card1,
  //       link: "#",
  //       date: "07/12/2018",
  //     },
  //     {
  //       title: "Lễ hội củng cúng",
  //       description: "Chuỗi sự kiện đặc biệt trong tháng lễ hội cuối năm.",
  //       imageUrl: sukien_card1,
  //       link: "#",
  //       date: "07/12/2018",
  //     },
  //     {
  //       title: "Lễ hội củng cúng",
  //       description: "Chuỗi sự kiện đặc biệt trong tháng lễ hội cuối năm.",
  //       imageUrl: sukien_card1,
  //       link: "#",
  //       date: "07/12/2018",
  //     },
  //     {
  //       title: "Lễ hội củng cúng",
  //       description: "Chuỗi sự kiện đặc biệt trong tháng lễ hội cuối năm.",
  //       imageUrl: sukien_card1,
  //       link: "#",
  //       date: "07/12/2018",
  //     },
  //     {
  //       title: "Lễ hội củng cúng",
  //       description: "Chuỗi sự kiện đặc biệt trong tháng lễ hội cuối năm.",
  //       imageUrl: sukien_card1,
  //       link: "#",
  //       date: "07/12/2018",
  //     },
  // ];
  const dispatch = useAppDispatch();
  const { watershow, loading, error } = useAppSelector((state) => state.watershow);

  
  useEffect(() => {
    dispatch(fetchWatershows());
  }, [dispatch]);

  useEffect(() => {
    console.log("Redux State - services: ", watershow); // Kiểm tra dữ liệu Redux
  }, [watershow]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="card-list">
      {watershow.map((card, index) => (
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

import React, { useEffect } from "react";
import Layout from "../../../layout";
import Footer from "../../../components/footer";
import "./sukien.css";
import CardList from "./CardList";
import CardFooter from "./CardFooter";
import banner_thucvat from "../../../assets/banner_thucvat.png";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchThucvatcontent } from "../../../features/thucvatcontentSlide";

const Thucvat = () => {
  const dispatch = useAppDispatch();
  const { thucvatcontent, loading, error } = useAppSelector(
    (state) => state.thucvatcontent
  );

  useEffect(() => {
    dispatch(fetchThucvatcontent());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Layout>
      <div className="giave_container">
        <div className="banner_content_h1">
        {thucvatcontent.map((item, index) => (
              <h1 key={index}>{item.title}</h1>
            ))}
        </div>
        <div className="lotus-card">
          <div className="lotus-content">
          {thucvatcontent.map((item, index) => (
              <h1 key={index}>{item.title2}</h1>
            ))}
            <div className="lotus_line"></div>
            {thucvatcontent.map((item, index) => (
              <p key={index}>{item.description}</p>
            ))}
            <div className="lotus-footer">
              <span className="lotus-type">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19.83 8.6998L15.3 4.1698C14.35 3.2198 13.04 2.7098 11.7 2.7798L6.69998 3.0198C4.69998 3.1098 3.10998 4.6998 3.00998 6.6898L2.76998 11.6898C2.70998 13.0298 3.20998 14.3398 4.15998 15.2898L8.68997 19.8198C10.55 21.6798 13.57 21.6798 15.44 19.8198L19.83 15.4298C21.7 13.5798 21.7 10.5598 19.83 8.6998ZM9.49998 12.3798C7.91998 12.3798 6.61998 11.0898 6.61998 9.4998C6.61998 7.9098 7.91998 6.6198 9.49998 6.6198C11.08 6.6198 12.38 7.9098 12.38 9.4998C12.38 11.0898 11.08 12.3798 9.49998 12.3798ZM17.53 13.5298L13.53 17.5298C13.38 17.6798 13.19 17.7498 13 17.7498C12.81 17.7498 12.62 17.6798 12.47 17.5298C12.18 17.2398 12.18 16.7598 12.47 16.4698L16.47 12.4698C16.76 12.1798 17.24 12.1798 17.53 12.4698C17.82 12.7598 17.82 13.2398 17.53 13.5298Z"
                    fill="white"
                  />
                </svg>
                Thực vật
              </span>
              <span className="lotus-date">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 5.83333V10L12.0833 11.25M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>9/06/2020
              </span>
            </div>
            <div className="card-footer-btn">
        <a  target="_blank" rel="noopener noreferrer">
          Xem thêm
          <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M13.75 10.0003L10.4167 6.66699M13.75 10.0003L10.4167 13.3337M13.75 10.0003L4.375 10.0003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
        </a>
        </div>
          </div>
          <div className="lotus-image">
            <img src={banner_thucvat} alt="Hoa Sen" />
          </div>
        </div>
        <div className="sukien_list_card">
          <CardList />
        </div>
        <div className="sukien_list_card_footer">
          <div className="sukien-header">
            <a href="#" className="nav-link-sukien">
              <svg
                style={{ paddingRight: "6px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M10 15.9997L15.3333 21.333M10 15.9997L15.3333 10.6663M10 15.9997L25 15.9997"
                  stroke="#EC008C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              Địa Điểm Sống Ảo            </a>
            <a href="#" className="nav-link-sukien">
            Quảng Trường Âu Lạc{" "}
              <svg
                style={{ paddingLeft: "6px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M22 16.0003L16.6667 10.667M22 16.0003L16.6667 21.3337M22 16.0003L7 16.0003"
                  stroke="#EC008C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="sukien-footer-title">
            <h2>CÓ THỂ BẠN THÍCH</h2>
          </div>
          <CardFooter />
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default Thucvat;

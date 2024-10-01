import React, { useEffect } from "react";
import Layout from "../../../layout";
import banner_khiduoidai from "../../../assets/banner_khiduoidai.png";
import Footer from "../../../components/footer";
import ImageWithCaption from "./ImageWithCaption";
import InfoSection from "./InfoSection";

import "./khiduoidai.css";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchKhiduoidaicontent } from "../../../features/khiduoidaicontentSlide";

const Khiduoidai = () => {
  const dispatch = useAppDispatch();
  const { khiduoidaicontent, loading, error } = useAppSelector(
    (state) => state.khiduoidaicontent
  );

  useEffect(() => {
    dispatch(fetchKhiduoidaicontent());
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
        <div className="banner_giave">
          <img src={banner_khiduoidai} alt="Banner Khi Dui Dai" />
        </div>
        <div className="banner_content">
          <div className="banner_content_h1">
            {khiduoidaicontent.map((item, index) => (
              <h1 key={index}>{item.title}</h1>
            ))}
            <div className="banner_content_info">
              <div className="info_item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19.83 8.6998L15.3 4.1698C14.35 3.2198 13.04 2.7098 11.7 2.7798L6.70001 3.0198C4.70001 3.1098 3.11001 4.6998 3.01001 6.6898L2.77001 11.6898C2.71001 13.0298 3.21001 14.3398 4.16001 15.2898L8.69001 19.8198C10.55 21.6798 13.57 21.6798 15.44 19.8198L19.83 15.4298C21.7 13.5798 21.7 10.5598 19.83 8.6998ZM9.50001 12.3798C7.92001 12.3798 6.62001 11.0898 6.62001 9.4998C6.62001 7.9098 7.92001 6.6198 9.50001 6.6198C11.08 6.6198 12.38 7.9098 12.38 9.4998C12.38 11.0898 11.08 12.3798 9.50001 12.3798ZM17.53 13.5298L13.53 17.5298C13.38 17.6798 13.19 17.7498 13 17.7498C12.81 17.7498 12.62 17.6798 12.47 17.5298C12.18 17.2398 12.18 16.7598 12.47 16.4698L16.47 12.4698C16.76 12.1798 17.24 12.1798 17.53 12.4698C17.82 12.7598 17.82 13.2398 17.53 13.5298Z"
                    fill="#EC008C"
                  />
                </svg>
                {khiduoidaicontent.map((item, index) => (
                  <p className="canhdep" key={index}>{item.content}</p>
                ))}
              </div>

              <div className="info_item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 5.83333V10L12.0833 11.25M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                    stroke="#666666"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {khiduoidaicontent.map((item, index) => (
                  <p className="time" key={index}>{item.date}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="banner_content_mota">
            <h6>Mô tả</h6>
            {khiduoidaicontent.map((item, index) => (
                  <p key={index}>{item.mota}</p>
                ))}
          </div>
        </div>

        <div className="baomat_mochoatdong">
          <div className="container_khiduoidai">
            <div className="section_khiduoidai">
            {khiduoidaicontent.map((item, index) => (
              <ImageWithCaption src={item.khi1} caption="Loài khỉ đuôi dài" />
              
            ))}
            {khiduoidaicontent.map((item, index) => (
              <InfoSection
                title={item.content1}
                description= {Array.isArray(item.description1) ? item.description1.join(' ') : item.description1}
              />              
            ))}
              
            </div>

            <div className="section_khiduoidai reverse">
            {khiduoidaicontent.map((item, index) => (
              <InfoSection
                title=""
                description= {Array.isArray(item.description2) ? item.description2.join(' ') : item.description2}
              />              
            ))}
               {khiduoidaicontent.map((item, index) => (
              <ImageWithCaption src={item.khi2} caption="Loài khỉ đuôi dài" />
              
            ))}
            </div>
            <div className="section_khiduoidai">
            {khiduoidaicontent.map((item, index) => (
              <ImageWithCaption src={item.khi3} caption="Loài khỉ đuôi dài" />
              
            ))}
            {khiduoidaicontent.map((item, index) => (
              <InfoSection
                title={item.content2}
                description= {Array.isArray(item.description3) ? item.description3.join(' ') : item.description3}
              />              
            ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export default Khiduoidai;

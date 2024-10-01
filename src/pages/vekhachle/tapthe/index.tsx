import React, { useEffect } from "react";
import Layout from "../../../layout";
import Footer from "../../../components/footer";
import banner_vetapthe from "../../../assets/banner_vetapthe.png";
import "./tapthe.css";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchTapthecontent } from "../../../features/tapthecontentSlide";

const Tapthe = () => {
  // Renamed to start with an uppercase letter
  const dispatch = useAppDispatch();
  const { tapthecontent, loading, error } = useAppSelector(
    (state) => state.tapthecontent
  );

  useEffect(() => {
    dispatch(fetchTapthecontent());
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
          {tapthecontent.map((item, index) => (
            <img key={index} src={item.banner} alt="banner" />
          ))}
        </div>
        <div className="banner_content">
          <div className="banner_content_h1">
            {tapthecontent.map((item, index) => (
              <h1 key={index}>{item.title}</h1>
            ))}
          </div>
          <div className="banner_content_mota">
            <h6>Mô tả</h6>
            {tapthecontent.map((item, index) => (
              <p key={index}>{item.mota}</p>
            ))}
          </div>
        </div>
        <div className="baomat_mochoatdong">
          {tapthecontent.map((item, index) => (
            <p key={index}>{item.description1}</p>
          ))}

          <ol>
            <li>
              {tapthecontent.map((item, index) => (
                <b>{item.list1}</b>
              ))}
              {tapthecontent.map((item, index) => (
                <ul>
                  {item.content1.map((content1, index) => (
                    <li key={index}>{content1}</li>
                  ))}{" "}
                </ul>
              ))}
            </li>

            <li>
              {tapthecontent.map((item, index) => (
                <b>{item.list2}</b>
              ))}{" "}
              {tapthecontent.map((item, index) => (
                <span>{item.content2}</span>
              ))}
            </li>
            <li>
              {tapthecontent.map((item, index) => (
                <b>{item.list3}</b>
              ))}
              {tapthecontent.map((item, index) => (
                <ul>
                  {item.content3.map((content3, index) => (
                    <li key={index}>{content3}</li>
                  ))}{" "}
                </ul>
              ))}
            </li>
            <li>
              {tapthecontent.map((item, index) => (
                <b>{item.list4}</b>
              ))}{" "}
              {tapthecontent.map((item, index) => (
                <span>{item.content4}</span>
              ))}
            </li>
          </ol>
        </div>
        <div className="tapthe_sukien">
          <h5>ĐẶT TOUR – SỰ KIỆN – TIỆC</h5>
          {tapthecontent.map((item, index) => (
            <p>{item.description2} </p>
          ))}
          <ul>
            <li>
              <b>Địa chỉ: </b>
              {tapthecontent.map((item, index) => (
                <span style={{color: '#666', fontFamily: 'Nunito', fontSize: '18px'}}>{item.diachi} </span>
              ))}{" "}
            </li>
            <li>
              <b>ĐT: </b>
              {tapthecontent.map((item, index) => (
                <span style={{color: '#666', fontFamily: 'Nunito', fontSize: '18px'}}>{item.sodt} </span>
              ))}{" "}
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Tapthe; // Also updated here to match the new name

import React, { useEffect } from "react";
import Footer from "../../../components/footer";
import Layout from "../../../layout";


import "./thanhvien.css";
import CardFooter from "./CardFooter";
import CarouselComponent from "./CarouselComponent";
import CarouselComponent_01 from "./CarouselComponent_01";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchThanhviencontent } from "../../../features/thanhviencontentSlide";

const Thanhvien = () => {
  const dispatch = useAppDispatch();
  const { thanhviencontent, loading, error } = useAppSelector(
    (state) => state.thanhviencontent
  );

  useEffect(() => {
    dispatch(fetchThanhviencontent());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <Layout>
      {thanhviencontent.map((thanhvien, index)=>(
      <div className="giave_container">
        

        <div className="banner_giave">
          <img src={thanhvien.banner} />
        </div>
        <div className="banner_content">
          <div className="banner_content_h1">
            <h1>{thanhvien.title}</h1>
          </div>
          <div className="banner_content_mota">
            <h6>Mô tả</h6>
            <p>{thanhvien.mota}</p>
          </div>
        </div>
        <div className="baomat_mochoatdong">
          <div className="thanhvien_content">
            <div style={{ width: "973px" }}>
              <h5>{thanhvien.content1}</h5>

              <p style={{ width: "100%" }}>
               {thanhvien.description1}
              </p>
            </div>
            <div className="anhnhahang">
              {" "}
              <img src={thanhvien.logo1} alt="" />
            </div>
          </div>
          <div className="btn_xemthem">
            Xem thêm
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
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="slider_thanhvien">
          <CarouselComponent />
        </div>
        <div className="baomat_mochoatdong">
          <div className="thanhvien_content">
            <div style={{ width: "973px" }}>
              <h5>{thanhvien.content2}</h5>

              <p style={{ width: "100%" }}>
              {thanhvien.description2}
              </p>
            </div>
            <div className="anhnhahang">
              {" "}
              <img src={thanhvien.logo2} alt="" />
            </div>
          </div>
          <div className="btn_xemthem">
            Xem thêm
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
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
          <div className="slider_thanhvien">
          <CarouselComponent_01 />
        </div>
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
              Phượng hoàng bay
            </a>
            <a href="#" className="nav-link-sukien">
              Tàu vượt thác{" "}
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
              ))}

      <Footer />
    </Layout>
  );
};

export default Thanhvien;

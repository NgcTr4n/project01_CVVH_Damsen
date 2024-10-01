import React, { useEffect } from "react";
import Layout from "../../../layout";
import Footer from "../../../components/footer";
import CardFooter from "./CardFooter";
import "./watershow_1.css";
import banner_watershow from "../../../assets/banner_watershow.png";
import banner_watershow_2 from "../../../assets/banner_watershow_2.png";
import banner_watershow_3 from "../../../assets/banner_watershow_3.png";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchWatershowcontents } from "../../../features/watershowcontentSlice";

const Watershow_1 = () => {
  // Changed to start with uppercase
  const dispatch = useAppDispatch();
  const { watershowcontent, loading, error } = useAppSelector(
    (state) => state.watershowcontent
  );

  useEffect(() => {
    dispatch(fetchWatershowcontents());
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
        <div style={{ width: "100%" }} className="banner_giave">
          {watershowcontent.map((item, index) => (
            <img src={item.banner1} />
          ))}
        </div>
        <div className="banner_content">
          <div className="banner_content_h1">
            <h1 style={{ width: "685px" }}>Nhạc nước Đầm Sen Water show</h1>
          </div>
          <div className="banner_content_mota">
            <h6>Mô tả</h6>
            {watershowcontent.map((item, index) => (
            <p>
              {item.mota}
            </p>
          ))}          </div>
        </div>
        <div className="baomat_mochoatdong">
        {watershowcontent.map((item, index) => (
            <p>
              {item.description1}
            </p>
          ))}
        </div>
        <div className="baomat_mochoatdong">
          {watershowcontent.map((item, index) => (
            <img src={item.banner2} />
          ))}
          {watershowcontent.map((item, index) => (
            <p style={{ width: "100%", textAlign: "center" }}>
              {item.content1}
            </p>
          ))}
        </div>
        <div className="baomat_mochoatdong">
        {watershowcontent.map((item, index) => (
            <p>
              {item.description2}
            </p>
          ))}
        </div>
        <div className="baomat_mochoatdong">
          {watershowcontent.map((item, index) => (
            <img src={item.banner3} />
          ))}
         {watershowcontent.map((item, index) => (
            <p style={{ width: "100%", textAlign: "center" }}>
              {item.content2}
            </p>
          ))}
        </div>
        <div className="baomat_mochoatdong">
        {watershowcontent.map((item, index) => (
            <p>
              {item.description3}
            </p>
          ))}
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

      <Footer />
    </Layout>
  );
};

export default Watershow_1;

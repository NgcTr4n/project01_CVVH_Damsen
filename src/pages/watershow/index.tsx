import React, { useEffect } from "react";
import Layout from "../../layout";
import Footer from "../../components/footer";
import EventSlider from "./EventSlider";
import "./sukien.css";
import CardList from "./CardList";
import CardFooter from "./CardFooter";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { fetchWatershowcontents } from "../../features/watershowcontentSlice";

const Watershow = () => {
  
  return (
    <Layout>
    
      <div className="giave_container">
        <div className="banner_content_h1">
          <h1>Sự kiện</h1>
        </div>
        <div className="banner_sukien">
          <EventSlider />
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

export default Watershow;

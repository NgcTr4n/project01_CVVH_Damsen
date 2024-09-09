import React from "react";
import Layout from "../../layout";
import Footer from "../../components/footer";
import EventSlider from "./EventSlider";
import "./sukien.css";

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
        <div className="banner_content"></div>
      </div>

      <Footer />
    </Layout>
  );
};

export default Watershow;

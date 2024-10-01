import React, { useEffect } from "react";
import Footer from "../../../components/footer";
import Sidebar from "../../../components/sidebar";
import Layout from "../../../layout";
import ServiceSection from "./ServiceSection";
import "./lichsu.css";
import banner_lichsu from "../../../assets/banner_lichsu.png";
import banner_lichsu_2 from "../../../assets/banner_lichsu_2.png";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchLichsucontent } from "../../../features/lichsucontentSlide";

const Lichsu = () => {
  const dispatch = useAppDispatch();
  const { lichsucontent, loading, error } = useAppSelector(
    (state) => state.lichsucontent
  );

  useEffect(() => {
    dispatch(fetchLichsucontent());
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
          {lichsucontent.map((item, index) => (
            <img src={item.banner1} />
          ))}
        </div>
        <div className="banner_content">
          <div className="banner_content_h1">
          {lichsucontent.map((item, index) => (
            <h1>
             {item.title}
            </h1>
          ))}
            {/* <h1>Lịch sử hình thành</h1> */}
          </div>
          <div className="banner_content_mota">
            <h6>Mô tả</h6>
            {lichsucontent.map((item, index) => (
            <p>
             {item.mota}
            </p>
          ))}
          </div>
        </div>
        <div className="lichsu_content">
          {lichsucontent.map((item, index) => (
            <p>
             {item.description}
            </p>
          ))}
        </div>
        <div className="lichsu_mochoatdong">
        {lichsucontent.map((item, index) => (
            <h5>
             {item.history}
            </h5>
            
          ))}
           {lichsucontent.map((item, index) => (
             <ul>
             {item.milestones.map((milestone, index) => (
               <li key={index}>{milestone}</li>
             ))}
           </ul>
          ))}
         
          <div className="banner_giave">
            {lichsucontent.map((item, index) => (
              <img src={item.banner2} />
            ))}{" "}
          </div>
        </div>
        <div className="lichsu_dichvu">
          <div className="lichsu_dichvu_card">
            <ServiceSection />
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Lichsu;

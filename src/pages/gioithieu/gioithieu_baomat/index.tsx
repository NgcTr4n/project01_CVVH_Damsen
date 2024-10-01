import React, { useEffect } from "react";
import Footer from "../../../components/footer";
import Sidebar from "../../../components/sidebar";
import Layout from "../../../layout";
import banner_baomat from "../../../assets/banner_baomat.png";
import "./baomat.css";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchThongtincanhan } from "../../../features/thongtincanhanSlide";
import { fetchBaomatcontent } from "../../../features/baomatcontentSlide";
import { fetchBaomatsubcontent } from "../../../features/baomatsubcontentSlide";
import { fetchThongtinbosung } from "../../../features/thongtinbosungSlide";

const Baomat = () => {
  const dispatch = useAppDispatch();
  const { thongtincanhan, loading, error } = useAppSelector(
    (state) => state.thongtincanhan
  );
  const { baomatcontent } = useAppSelector(
    (state) => state.baomatcontent
  );
  const { baomatsubcontent } = useAppSelector(
    (state) => state.baomatsubcontent
  );
  const { thongtinbosung } = useAppSelector(
    (state) => state.thongtinbosung
  );
  useEffect(() => {
    dispatch(fetchThongtincanhan());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchThongtinbosung());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchBaomatcontent());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchBaomatsubcontent());
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
          {baomatcontent.map((item, index)=>(
          <img src={item.banner1} />
          ))}
        </div>
        <div className="banner_content">
          <div className="banner_content_h1">
          {baomatcontent.map((item, index)=>(
            <h1>{item.title}</h1>
          ))}
          </div>
          <div className="banner_content_mota">
            <h6>Mô tả</h6>
            {baomatcontent.map((item, index)=>(
            <p>{item.mota}</p>
          ))}
          </div>
        </div>
        <div className="baomat_mochoatdong">
        {baomatcontent.map((item, index)=>(
                    <h5>{item.content}</h5>
          ))}
          {baomatcontent.map((item, index)=>(
                    <p>{item.description}</p>
          ))}
        </div>
        <div className="banner_giave">
          {baomatcontent.map((item, index)=>(
          <img src={item.banner2} />
          ))}
        </div>
        <div className="baomat_mochoatdong">
          <h5>Thông tin cá nhân nào bị thu thập và tại sao thu thập?</h5>
            <ol>
            {thongtincanhan.map((item, index) => (

              <li>
                <b>{item.content}</b>
                <br />
                {item.description.map((desc, descIndex) => (
                  <p key={descIndex}>{desc}</p>
                ))}
              </li>
                        ))}

            </ol>

       
        </div>
        {baomatsubcontent.map((item, index)=>(
           <div key={index} className="baomat_mochoatdong">
           <h5>{item.content}</h5>
           <p>
            {item.description}
           </p>
         </div>
        ))}

        <div className="baomat_bosung">
          <h5>Thông tin bổ sung</h5>
          <ol>
           {thongtinbosung.map((item, index)=>(
            <li key={index}>{item.description}</li>
           ))}
          </ol>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Baomat;

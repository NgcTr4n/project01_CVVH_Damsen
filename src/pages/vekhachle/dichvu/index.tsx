import React, { useEffect } from "react";
import Layout from "../../../layout";
import Footer from "../../../components/footer";
import "./dichvu.css";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchVedichvucontent } from "../../../features/vedichvucontentSlide";
import { fetchDvchothue } from "../../../features/dvchothueSlide";
import { fetchDvxedien } from "../../../features/dvxedienSlide";
import { fetchVedichvusubcontent } from "../../../features/vedichvusubcontentSlide";

const Dichvu = () => {
  const dispatch = useAppDispatch();
  const { vedichvucontent, loading, error } = useAppSelector(
    (state) => state.vedichvucontent
  );
  const { dvchothue } = useAppSelector((state) => state.dvchothue);
  const { dvxedien } = useAppSelector((state) => state.dvxedien);
  const { vedichvusubcontent } = useAppSelector(
    (state) => state.vedichvusubcontent
  );

  useEffect(() => {
    dispatch(fetchVedichvucontent());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchDvchothue());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchDvxedien());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchVedichvusubcontent());
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
          {vedichvucontent.map((item, index) => (
            <img src={item.banner1} />
          ))}
        </div>
        <div className="banner_content">
          <div className="banner_content_h1">
            {vedichvucontent.map((item, index) => (
              <h1 style={{ width: "685px" }}>{item.title}</h1>
            ))}
          </div>
          <div className="banner_content_mota">
            <h6>Mô tả</h6>
            {vedichvucontent.map((item, index) => (
              <p>{item.mota}</p>
            ))}
          </div>
        </div>
        <div className="baomat_mochoatdong">
          {vedichvucontent.map((item, index) => (
            <p>{item.description}</p>
          ))}
        </div>

        <div className="baomat_mochoatdong">
          {vedichvusubcontent.map((item, index) => (
            <h5>{item.title1}</h5>
          ))}
          <div className="dichvu_canhbao">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M11 11.5H9V5.5H11M11 15.5H9V13.5H11M10 0.5C8.68678 0.5 7.38642 0.758658 6.17317 1.2612C4.95991 1.76375 3.85752 2.50035 2.92893 3.42893C1.05357 5.3043 0 7.84784 0 10.5C0 13.1522 1.05357 15.6957 2.92893 17.5711C3.85752 18.4997 4.95991 19.2362 6.17317 19.7388C7.38642 20.2413 8.68678 20.5 10 20.5C12.6522 20.5 15.1957 19.4464 17.0711 17.5711C18.9464 15.6957 20 13.1522 20 10.5C20 9.18678 19.7413 7.88642 19.2388 6.67317C18.7362 5.45991 17.9997 4.35752 17.0711 3.42893C16.1425 2.50035 15.0401 1.76375 13.8268 1.2612C12.6136 0.758658 11.3132 0.5 10 0.5Z"
                fill="#DFA100"
              />
            </svg>
            {vedichvusubcontent.map((item, index) => (
            <span>{item.note1}</span>
          ))}
          </div>
          {vedichvusubcontent.map((item, index) => (
            <p>{item.description1}</p>
          ))}
         
          <div className="dichvu_bang">
            <table>
              <thead>
                <tr>
                  <th>Loại hình</th>
                  <th>Số người</th>
                  <th>Số tiền</th>
                </tr>
                {dvxedien.map((card) => (
                  <tr key={card.id}>
                    <td>{card.loaihinh}</td>

                    <td>{card.songuoi}</td>
                    <td>{card.sotien}</td>
                  </tr>
                ))}
              </thead>
            </table>
          </div>
        </div>

        <div className="baomat_mochoatdong">
          {vedichvusubcontent.map((item, index) => (
            <h5>{item.title2}</h5>
          ))}
          <div className="dichvu_canhbao">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M11 11.5H9V5.5H11M11 15.5H9V13.5H11M10 0.5C8.68678 0.5 7.38642 0.758658 6.17317 1.2612C4.95991 1.76375 3.85752 2.50035 2.92893 3.42893C1.05357 5.3043 0 7.84784 0 10.5C0 13.1522 1.05357 15.6957 2.92893 17.5711C3.85752 18.4997 4.95991 19.2362 6.17317 19.7388C7.38642 20.2413 8.68678 20.5 10 20.5C12.6522 20.5 15.1957 19.4464 17.0711 17.5711C18.9464 15.6957 20 13.1522 20 10.5C20 9.18678 19.7413 7.88642 19.2388 6.67317C18.7362 5.45991 17.9997 4.35752 17.0711 3.42893C16.1425 2.50035 15.0401 1.76375 13.8268 1.2612C12.6136 0.758658 11.3132 0.5 10 0.5Z"
                fill="#DFA100"
              />
            </svg>
            {vedichvusubcontent.map((item, index) => (
            <span>{item.note2}</span>
          ))}
          </div>
          <div className="dichvu_bang">
            <table>
              <thead>
                <tr>
                  <th>Cho thuê</th>
                  <th>Giá Xe</th>
                </tr>
              </thead>
              <tbody>
                {dvchothue.map((card) => (
                  <tr key={card.id}>
                    <td style={{ display: "flex", alignItems: "flex-start" }}>
                      {card.chothue}
                    </td>
                    <td>
                      {" "}
                      {card.gia.map((giaItem, index) => (
                        <span
                          style={{
                            color: "#666",
                            fontFamily: "Nunito",
                            fontSize: "18px",
                          }}
                          key={index}
                        >
                          {giaItem}
                          <br />
                        </span>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {vedichvusubcontent.map((item, index) => (
          <div className="baomat_mochoatdong">
            <h5>{item.title3}</h5>
            <p>{item.description3} {" "} <a href="#">tại đây</a></p>
          </div>
        ))}
      </div>
      <Footer />
    </Layout>
  );
};

export default Dichvu;

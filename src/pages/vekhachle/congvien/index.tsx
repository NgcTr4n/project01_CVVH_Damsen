import React, { useEffect } from "react";
import Layout from "../../../layout";
import Footer from "../../../components/footer";
import "./vekhachle.css";
import banner_giave from "../../../assets/banner_giave.png";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchChuy } from "../../../features/chuySlide";
import { fetchCongviencontent } from "../../../features/congviencontentSlide";
const Vekhachle = () => {
  const dispatch = useAppDispatch();
  const { chuy, loading, error } = useAppSelector((state) => state.chuy);
  const { congviencontent } = useAppSelector((state) => state.congviencontent);

  useEffect(() => {
    dispatch(fetchChuy());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchCongviencontent());
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
          {congviencontent.map((item, index) => (
            <img src={item.banner} />
          ))}
        </div>
        <div className="banner_content">
          <div className="banner_content_h1">
            {congviencontent.map((item, index) => (
              <h1>{item.title}</h1>
            ))}
          </div>
          <div className="banner_content_mota">
            <h6>Mô tả</h6>
            {congviencontent.map((item, index) => (
              <p>{item.mota}</p>
            ))}
          </div>
        </div>
        <div className="giave_sticket_section">
          <div className="giave_sticket_green">
            <div className="giave_sticket_green_title">
              <h2>VÉ THAM QUAN</h2>
            </div>
            <ul className="sticket_dichvu">
              <li className="sticket_dichvu_null">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M4.5 12.6111L9.42308 17.5L20.5 6.5"
                    stroke="#259E58"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Tham quan trong ngày
              </li>
              <li className="sticket_dichvu_none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M6.5 6L18.5 18M18.5 6L6.5 18"
                    stroke="#FF0000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Bao gồm trò chơi
              </li>
              <li className="sticket_dichvu_none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M6.5 6L18.5 18M18.5 6L6.5 18"
                    stroke="#FF0000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Dịch vụ xe điện
              </li>
            </ul>
            <ul className="sticket_noidung">
              <li>
                <b
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  Mua từ cổng
                </b>

                <p
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  {" "}
                  + 120.000 VNĐ/người (&gt; 1.4m)
                </p>
                <p
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  {" "}
                  + 80.000 VNĐ/trẻ con (&lt; 1.4m)
                </p>
              </li>
              <li>
                <b
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  Mua từ cổng Công viên nước:
                </b>

                <p
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  {" "}
                  + 80.000 VNĐ/người (&gt; 1.4m)
                </p>
                <p
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  {" "}
                  + 50.000 VNĐ/trẻ em (&lt; 1.4m)
                </p>
              </li>
            </ul>
          </div>
          <div className="giave_sticket_pink">
            <div className="giave_sticket_pink_title">
              {" "}
              <h2>VÉ TRỌN GÓI</h2>
            </div>
            <ul className="sticket_dichvu">
              <li className="sticket_dichvu_null">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M4.5 12.6111L9.42308 17.5L20.5 6.5"
                    stroke="#259E58"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Tham quan trong ngày
              </li>
              <li className="sticket_dichvu_null">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M4.5 12.6111L9.42308 17.5L20.5 6.5"
                    stroke="#259E58"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Bao gồm trò chơi
              </li>
              <li className="sticket_dichvu_none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M6.5 6L18.5 18M18.5 6L6.5 18"
                    stroke="#FF0000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Thủy cung
              </li>
              <li className="sticket_dichvu_none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M6.5 6L18.5 18M18.5 6L6.5 18"
                    stroke="#FF0000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Dịch vụ xe điện
              </li>
            </ul>
            <ul className="sticket_noidung">
              <li>
                <b
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  Mua từ cổng
                </b>
                <p
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  {" "}
                  + 260.000 VNĐ/người (&gt; 1.4m)
                </p>
                <p
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  {" "}
                  + 180.000 VNĐ/người (&lt; 1.4m)
                </p>
              </li>
              <li>
                <b
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  Mua từ cổng Công viên nước:
                </b>
                <p
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  {" "}
                  + 220.000 VNĐ/người (&gt; 1.4m)
                </p>
                <p
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  {" "}
                  + 150.000 VNĐ/người (&lt; 1.4m)
                </p>
              </li>
              <li>
                <b
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  Mua trong công viên:
                </b>

                <p
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  {" "}
                  + 220.000 VNĐ/người
                </p>
              </li>
            </ul>
          </div>
          <div className="giave_sticket_blue">
            <div className="giave_sticket_blue_title">
              <h2>VÉ SILVER</h2>
            </div>
            <ul className="sticket_dichvu">
              <li className="sticket_dichvu_null">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M4.5 12.6111L9.42308 17.5L20.5 6.5"
                    stroke="#259E58"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Tham quan trong ngày
              </li>
              <li className="sticket_dichvu_null">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M4.5 12.6111L9.42308 17.5L20.5 6.5"
                    stroke="#259E58"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Bao gồm trò chơi
              </li>
              <li className="sticket_dichvu_null">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M4.5 12.6111L9.42308 17.5L20.5 6.5"
                    stroke="#259E58"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Lối đi riêng
              </li>
              <li className="sticket_dichvu_none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M6.5 6L18.5 18M18.5 6L6.5 18"
                    stroke="#FF0000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Thủy cung
              </li>
              <li className="sticket_dichvu_none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M6.5 6L18.5 18M18.5 6L6.5 18"
                    stroke="#FF0000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Massage cá
              </li>
              <li className="sticket_dichvu_none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M6.5 6L18.5 18M18.5 6L6.5 18"
                    stroke="#FF0000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Dịch vụ xe điện
              </li>
            </ul>
            <ul className="sticket_noidung">
              <li>
                <b
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "150%",
                  }}
                >
                  Mua từ cổng
                </b>
                <p
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  {" "}
                  + 380.000 VNĐ/người (&gt; 1.4m)
                </p>
                <p
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  {" "}
                  + 240.000 VNĐ/người (&lt; 1.4m)
                </p>
              </li>
              <li>
                <b
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 700,
                    lineHeight: "150%",
                  }}
                >
                  Mua từ cổng Công viên nước:
                </b>

                <p
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  {" "}
                  + 340.000 VNĐ/người (&gt; 1.4m)
                </p>
                <p
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  {" "}
                  + 220.000 VNĐ/người (&lt; 1.4m)
                </p>
              </li>
              <li>
                <b
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 800,
                    lineHeight: "150%",
                  }}
                >
                  Mua trong công viên:
                </b>

                <p
                  style={{
                    color: "var(--gray-gray-500, #666)",
                    fontFamily: "Nunito",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "150%",
                  }}
                >
                  {" "}
                  + 280.000 VNĐ/người
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="gioithieu_giave_luuy">
          <h5>Chú ý</h5>
          {chuy.map((item, index) => (
            <ul key={index}>
              <li>
                <b>{item.content}</b> {item.description}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Vekhachle;

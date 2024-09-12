import React from "react";
import Footer from "../../../components/footer";
import Sidebar from "../../../components/sidebar";
import Layout from "../../../layout";
import banner_thanhvien from "../../../assets/banner_thanhvien.png";
import logo_nhahangtt from "../../../assets/logo_nhahangtt.png";
import logo_cf from "../../../assets/logo_cf.png";

import "./thanhvien.css";
import CardFooter from "./CardFooter";
import CarouselComponent from "./CarouselComponent";
import slide_thanhvien_01 from "../../../assets/slide_thanhvien_01.png";
import slide_thanhvien_02 from "../../../assets/slide_thanhvien_02.png";

const imageUrls = [
  slide_thanhvien_01,
  slide_thanhvien_02,
  slide_thanhvien_01,
  slide_thanhvien_02,
  slide_thanhvien_01,
];
const caption =
  'Vua đầu bếp "Yan Can Cook" từng đến giao lưu với đội ngũ bếp của nhà hàng Thủy Tạ Đầm Sen';

const Thanhvien = () => {
  return (
    <Layout>
      <div className="giave_container">
        <div className="banner_giave">
          <img src={banner_thanhvien} />
        </div>
        <div className="banner_content">
          <div className="banner_content_h1">
            <h1>Thành viên</h1>
          </div>
          <div className="banner_content_mota">
            <h6>Mô tả</h6>
            <p>Thông tin về các đơn vị thành viên của CVVH Đầm Sen</p>
          </div>
        </div>
        <div className="baomat_mochoatdong">
          <div className="thanhvien_content">
            <div style={{ width: "973px" }}>
              <h5>nhà hàng thủy tạ</h5>

              <p style={{ width: "100%" }}>
                Đơn vị thành viên đầu tiên của Đầm Sen là Nhà hàng Thủy tạ nằm ở
                cổng số 2 của CVVH Đầm Sen. Địa chỉ số 3 Hòa Bình, Quận 11,
                TP.HCM. Ra đời từ năm 1985, nằm trong lòng CVVH Đầm Sen (thuộc
                Công ty cổ phần Dịch vụ & Du lịch Phú Thọ quản lý), nhà hàng
                Thủy Tạ đã định hình thương hiệu và không ngừng phát triển. Hàng
                năm, đội ngũ nhân viên của nhà hàng đều được đào tạo nâng cao về
                nghiệp vụ cũng như thái độ phục vụ để đáp ứng mọi yêu cầu của
                thực khách. Chính vì vậy, suốt nghiều năm qua, nhà hàng Thủy Tạ
                Đầm Sen vẫn là cái tên được lựa chọn hàng đầu của các cá nhân và
                cơ quan đơn vị khi đặt tiệc tổ chức sự kiện.
              </p>
            </div>
            <div className="anhnhahang">
              {" "}
              <img src={logo_nhahangtt} alt="" />
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
          <CarouselComponent images={imageUrls} caption={caption} />
        </div>
        <div className="baomat_mochoatdong">
          <div className="thanhvien_content">
            <div style={{ width: "973px" }}>
              <h5>cà phê vườn đá</h5>

              <p style={{ width: "100%" }}>
                Cà phê Vườn Đá bắt đầu hoạt động vào năm 2009. Đây được xem là
                cà phê rộng và “thiên nhiên” nhất tại TP.HCM. Khuôn viên quán là
                một phần diện tích của CVVH Đầm Sen. Kiến trúc nhà sàn bên cạnh
                những tảng đá thiên nhiên với đa dạng hình thù. Đồng thời có
                dòng suối chảy róc rách cùng những loài chim thả tự nhiên. Khách
                đến có thể cảm nhận như một “Đà Lạt thu nhỏ”. Đồng thời, vào mỗi
                tối và sáng thứ bảy – chủ nhật đều có biểu diễn nhạc sống.{" "}
                <br />
                Năm 2018, đơn vị thành viên của Đầm Sen này đã khai trương thêm
                gian triển lãm tranh đá quý để khách tham quan có điều kiện
                thưỡng lãm.
              </p>
            </div>
            <div className="anhnhahang">
              {" "}
              <img src={logo_cf} alt="" />
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

export default Thanhvien;

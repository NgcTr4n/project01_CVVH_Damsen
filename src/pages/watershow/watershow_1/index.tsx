import React from "react";
import Layout from "../../../layout";
import Footer from "../../../components/footer";
import CardFooter from "./CardFooter";
import './watershow_1.css'
import banner_watershow from "../../../assets/banner_watershow.png";
import banner_watershow_2 from "../../../assets/banner_watershow_2.png";
import banner_watershow_3 from "../../../assets/banner_watershow_3.png";

const watershow_1 = () => {
  return (
    <Layout>
      <div className="giave_container">
        <div style={{ width: "100%" }} className="banner_giave">
          <img src={banner_watershow} />
        </div>
        <div className="banner_content">
          <div className="banner_content_h1">
            <h1 style={{ width: "685px" }}>Nhạc nước Đầm Sen Water show</h1>
          </div>
          <div className="banner_content_mota">
            <h6>Mô tả</h6>
            <p>Sắp ra mắt nhạc nước Đầm Sen Water Show</p>
          </div>
        </div>
        <div className="baomat_mochoatdong">
          <p>
            CVVH Đầm Sen chuẩn bị ra mắt công trình nhạc nước Đầm Sen Water Show
            với tổng chiều dài biểu diễn hơn 100 mét, kết hợp với khói lửa, công
            nghệ Laser dance và màn hình khổng lồ hình rẽ quạt, được tạo bằng
            nước với chiều ngang 40 mét, và chiều cao 20 mét.
          </p>
        </div>
        <div className="baomat_mochoatdong">
          <img src={banner_watershow_2} />
          <p style={{ width: "100%", textAlign: "center" }}>
            Ảnh minh họa dự án Đầm Sen Water show
          </p>
        </div>
        <div className="baomat_mochoatdong">
          <p>
            Sau đại dịch Covid 19, CVVH Đầm Sen đã dần phục hồi trở lại. Đặc
            biệt là tiếp tục triển khai dự án nhạc nước Đầm Sen Water Show. Đây
            được xem là công trình nhạc nước hoàn toàn mới tại TP.HCM, được biểu
            diễn ngay trên mặt hồ của công viên. <br /> Điểm đặc biệt của công
            trình nhạc nước này, là hình ảnh 3D được chiếu trên màn hình rẽ quạt
            khổng lồ được tạo bằng nước, rộng 40 mét (cao 20 mét). Hệ thống vòi
            phun nhạc nước hiện đại trên thê giới hiện nay, được lập trình kỹ
            lưỡng đến từng giây. Hệ thống khói lửa được tạo ra ngay trên mặt hồ.
            Đồng thời, hệ thống ánh sáng laser hiện đại được nhập từ Châu Âu, và
            hệ thống âm thanh với cả chục chiếc loa công suất lớn, đặt xung
            quanh hồ để tạo hiệu ứng cho người xem.
          </p>
        </div>
        <div className="baomat_mochoatdong">
          <img src={banner_watershow_3} />
          <p style={{ width: "100%", textAlign: "center" }}>
            Vị trí ngồi rộng rãi tại nhà hàng Thủy Ta xem biểu diễn Laser show
            màn nước 3D trên hồ Đầm Sen 2019{" "}
          </p>
        </div>
        <div className="baomat_mochoatdong">
          <p>
            Trước đây, CVVH Đầm Sen đã từng có công trình nhạc nước, nhưng với
            quy mô nhỏ tại khu vực <a href="#">quảng trường La Mã</a>. Rồi đến tháng tư năm
            2019, <a href="#">Công ty Cổ phần Dịch vụ Du lịch Phú Thọ</a> (Phuthotourist – cơ
            quan chủ quản của Đầm Sen) đã quyết định đầu tư giai đoạn 1 của dự
            án nhạc nước trên mặt hồ với <a href="">công trình màn nước laser show</a>. Đến
            nay, giai đoạn 2 của hệ thống đang dần hoàn thiện trong tháng 11. Dự
            kiến Đầm Sen Water Show sẽ chính thức ra mắt vào đầu tháng 12/2020,
            để kịp phục vụ du khách vào những sự kiện cuối năm. <br /> Ban lãnh đạo
            Phuthotourist cũng đang cân nhắc liệu có cho phép du khách được
            thưởng thức nhạc nước bằng <a href="">thuyền Pedalo</a> trên mặt hồ. Nếu được, chắc
            chắn đây sẽ là điểm thú vị cho du khách được trải nghiệm cảm giác ở
            ngồi trên nước và xem nhạc nước như thế nào.
          </p>
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

export default watershow_1;

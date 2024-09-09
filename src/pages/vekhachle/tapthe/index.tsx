import React from "react";
import Layout from "../../../layout";
import Footer from "../../../components/footer";
import banner_vetapthe from "../../../assets/banner_vetapthe.png";
import "./tapthe.css";

const tapthe = () => {
  return (
    <Layout>
      <div className="giave_container">
        <div className="banner_giave">
          <img src={banner_vetapthe} />
        </div>
        <div className="banner_content">
          <div className="banner_content_h1">
            <h1>Vé tập thể</h1>
          </div>
          <div className="banner_content_mota">
            <h6>Mô tả</h6>
            <p>Đầm Sen là nơi vui chơi yêu thích của các bạn nhỏ.</p>
          </div>
        </div>
        <div className="baomat_mochoatdong">
          <p>
            Đối với các đoàn khách: Nhóm bạn, cơ quan đoàn thể, Trường học, công
            ty du lịch, công nhân, chúng tôi có giá vé tập thể ưu đãi cho Quý cơ
            quan khi đến tham quan vui chơi tại CVVH Đầm Sen . Bên cạnh đó, Quý
            cơ quan cũng có thể đặt yêu cầu hướng dẫn, tổ chức sự kiện, Team
            building chúng tôi cũng sẽ đáp ứng đầy đủ. <br />
            Để biết chi tiết về chính sách giá ưu đãi và thực đơn cơm tại CVVH
            Đầm Sen, Quý khách vui lòng liên hệ với nhân viên phụ trách như sau:
          </p>
          <ol>
            <li>
              <b>Công ty Du Lịch/ giáo xứ/ nhóm bạn/ Cơ quan đoàn thể:</b>
              <ul>
                <li>Mrs. Minh: 0902 575 805</li>
                <li> Mr. Đăng Khánh: 0789 848 418</li>
              </ul>
            </li>
            <li>
              <b>Thư viện:</b> <span>Mr. Hiếu Trung: 0989 967 129</span>
            </li>
            <li>
              <b>Công nhân + sự kiện:</b>
              <br />
              <ul>
                <li>Mrs. Minh: 0902 575 805</li>
                <li>Mr. Đăng Khánh: 0789 848 418 </li>
              </ul>
            </li>
            <li>
              <b>Nội dung nhúng từ website khác: </b>{" "}
              <span> (028) 3963 3593 – 0902575805 (Mrs. Minh)</span>
            </li>
          </ol>
        </div>
        <div className="tapthe_sukien">
          <h5>ĐẶT TOUR – SỰ KIỆN – TIỆC</h5>
          <p>Phòng Tiếp nhận Tour Đầm Sen </p>
          <ul>
            <li>
              <b>Địa chỉ: </b>
              Cổng 1A, Số 3, Hòa Bình, Phường 3, Quận 11, TP. HCM
            </li>
            <li>
              <b>ĐT: </b>
              (028) 3963.3593 – (028) 3858 8868
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default tapthe;

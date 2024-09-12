import React from "react";
import Layout from "../../../layout";
import Footer from "../../../components/footer";
import "./dichvu.css";
import banner_vedichvu from "../../../assets/banner_vedichvu.png";

const dichvu = () => {
  return (
    <Layout>
      <div className="giave_container">
        <div style={{ width: "100%" }} className="banner_giave">
          <img src={banner_vedichvu} />
        </div>
        <div className="banner_content">
          <div className="banner_content_h1">
            <h1 style={{ width: "685px" }}>Vé dịch vụ</h1>
          </div>
          <div className="banner_content_mota">
            <h6>Mô tả</h6>
            <p>Trải nghiệm các dịch vụ tiện ích của Đầm Sen ngay bạn nhé!</p>
          </div>
        </div>
        <div className="baomat_mochoatdong">
          <p>
            Bên cạnh các vé tham quan và chơi trò chơi tại Đầm Sen, chúng tôi
            còn có các vé dịch vụ cộng thêm dành cho du khách. Trong đó có các
            dịch vụ như xe điện, giữ đồ, cho thuê xe đẩy, xe nôi, xe lăn.
          </p>
        </div>
        <div className="baomat_mochoatdong">
          <h5>DỊCH VỤ XE ĐIỆN</h5>
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
            <span>Lưu ý: Không áp dụng Vé trọn gói Đầm sen!</span>
          </div>
          <p>
            Bên cạnh việc tham quan Đầm Sen bằng “đoàn tàu cổ tích” (bao gồm
            trong <a href="#">vé trọn gói</a> và vé <a href="#">Silver</a> ), du
            khách có thể thưởng ngoạn bằng dịch vụ xe điện riêng của Đầm Sen.
            Tùy vào loại vé, hành trình xe điện sẽ đưa quý khách từ trạm đón
            (khu <a href="#">trò chơi cảm giác mạnh</a> ở quảng trường Âu Lạc),
            đi quanh hồ Đầm Sen, tham quan vườn chim thú ở khu B, và về vườn Lan
            rừng để ngắm những loại hoa đẹp nhất tại Đầm Sen.
          </p>
          <div className="dichvu_bang">
            <table>
              <thead>
                <tr>
                  <th>Loại hình</th>
                  <th>Số người</th>
                  <th>Số tiền</th>
                </tr>
                <tr>
                  <td>Happy car</td>
                  <td>1 – 5</td>
                  <td>150.000 đồng/30 phút</td>
                </tr>
                <tr>
                  <td>Family car</td>
                  <td>6 – 7</td>
                  <td>200.000 đồng/30 phút</td>
                </tr>
                <tr>
                  <td>Friendly car</td>
                  <td>8 – 10</td>
                  <td>250.00 đồng/30 phút</td>
                </tr>
                <tr>
                  <td>Family car</td>
                  <td>11 – 12</td>
                  <td>300.000 đồng/30 phút</td>
                </tr>
                <tr>
                  <td>Cung đường</td>
                  <td>1 – 5</td>
                  <td>50.000 đồng/chuyến</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <div className="baomat_mochoatdong">
          <h5>DỊCH VỤ CHO THUÊ</h5>
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
            <span>
              Lưu ý: Tiền thế chân từ 300.000 đồng đến 500.000 đồng + CMND
            </span>
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
                <tr>
                  <td style={{ display: "flex", alignItems: "flex-start" }}>
                    Xe đẩy
                  </td>
                  <td>
                    50.000 đồng/lần (Cỡ nhỏ)
                    <br />
                    80.000 đồng/lần (Cỡ lớn)
                  </td>
                </tr>
                <tr>
                  <td style={{ display: "flex", alignItems: "flex-start" }}>
                    Xe nôi
                  </td>
                  <td>
                    80.000 đồng/lần (Cỡ nhỏ)
                    <br />
                    120.000 đồng/lần (Cỡ lớn)
                  </td>
                </tr>
                <tr>
                  <td style={{ display: "flex", alignItems: "flex-start" }}>
                    Xe lăn
                  </td>
                  <td>100.000 đồng/lần</td>
                </tr>
                <tr>
                  <td style={{ display: "flex", alignItems: "flex-start" }}>
                    Tủ giữ đồ
                  </td>
                  <td>20.000 đồng/hộc tủ/lần</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="baomat_mochoatdong">
          <h5>GHI CHÚ</h5>
          <p>
            Vé dịch vụ này không bao gồm trong các loại vé cổng, hay vé trọn
            gói, cũng như Silver. Để biết thêm về những loại vé này, xin vui
            lòng xem <a href="#">tại đây</a>
          </p>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default dichvu;

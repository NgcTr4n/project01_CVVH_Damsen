import React from "react";
import logo_ngang from "../../assets/logo ngang.png";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_header">
        <div className="footer_logo">
          <h2>Trực thuộc</h2>
          <img src={logo_ngang} />
        </div>
        <div className="footer_contact">
          <div className="contact_lh">
            <h2>Liên hệ</h2>
            <div className="contact_lh_tt">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M3.61971 8.99C5.58971 0.330002 18.4197 0.340003 20.3797 9C21.5297 14.08 18.3697 18.38 15.5997 21.04C14.6318 21.9735 13.3395 22.4952 11.9947 22.4952C10.65 22.4952 9.35763 21.9735 8.38971 21.04C5.62971 18.38 2.46971 14.07 3.61971 8.99Z"
                  fill="white"
                />
                <path
                  d="M11.9999 13.9304C12.4096 13.9304 12.8153 13.8497 13.1939 13.6929C13.5724 13.5361 13.9163 13.3063 14.2061 13.0166C14.4958 12.7269 14.7256 12.3829 14.8824 12.0044C15.0392 11.6259 15.1199 11.2202 15.1199 10.8104C15.1199 10.4007 15.0392 9.99499 14.8824 9.61646C14.7256 9.23792 14.4958 8.89397 14.2061 8.60426C13.9163 8.31454 13.5724 8.08472 13.1939 7.92793C12.8153 7.77113 12.4096 7.69043 11.9999 7.69043C11.1724 7.69043 10.3788 8.01914 9.79371 8.60426C9.2086 9.18937 8.87988 9.98295 8.87988 10.8104C8.87988 11.6379 9.2086 12.4315 9.79371 13.0166C10.3788 13.6017 11.1724 13.9304 11.9999 13.9304Z"
                  fill="#259E58"
                />
              </svg>
              <span>03 Hòa Bình, Phường 3, Quận 11</span>
            </div>
            <div className="contact_lh_tt">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M21.97 18.83C21.97 19.19 21.89 19.56 21.72 19.92C21.55 20.28 21.33 20.62 21.04 20.94C20.55 21.48 20.01 21.87 19.4 22.12C18.8 22.37 18.15 22.5 17.45 22.5C16.43 22.5 15.34 22.26 14.19 21.77C13.04 21.28 11.89 20.62 10.75 19.79C9.58811 18.9401 8.49169 18.0041 7.47 16.99C6.45877 15.972 5.5261 14.8789 4.68 13.72C3.86 12.58 3.2 11.44 2.72 10.31C2.24 9.17 2 8.08 2 7.04C2 6.36 2.12 5.71 2.36 5.11C2.6 4.5 2.98 3.94 3.51 3.44C4.15 2.81 4.85 2.5 5.59 2.5C5.87 2.5 6.15 2.56 6.4 2.68C6.66 2.8 6.89 2.98 7.07 3.24L9.39 6.51C9.57 6.76 9.7 6.99 9.79 7.21C9.88 7.42 9.93 7.63 9.93 7.82C9.93 8.06 9.86 8.3 9.72 8.53C9.59 8.76 9.4 9 9.16 9.24L8.4 10.03C8.29 10.14 8.24 10.27 8.24 10.43C8.24 10.51 8.25 10.58 8.27 10.66C8.3 10.74 8.33 10.8 8.35 10.86C8.53 11.19 8.84 11.62 9.28 12.14C9.73 12.66 10.21 13.19 10.73 13.72C11.27 14.25 11.79 14.74 12.32 15.19C12.84 15.63 13.27 15.93 13.61 16.11C13.66 16.13 13.72 16.16 13.79 16.19C13.87 16.22 13.95 16.23 14.04 16.23C14.21 16.23 14.34 16.17 14.45 16.06L15.21 15.31C15.46 15.06 15.7 14.87 15.93 14.75C16.16 14.61 16.39 14.54 16.64 14.54C16.83 14.54 17.03 14.58 17.25 14.67C17.47 14.76 17.7 14.89 17.95 15.06L21.26 17.41C21.52 17.59 21.7 17.8 21.81 18.05C21.91 18.3 21.97 18.55 21.97 18.83Z"
                  fill="white"
                />
              </svg>
              <span>0839 632 394</span>
            </div>
            <div className="contact_lh_tt">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M17 21H7C4 21 2 19.5 2 16V9C2 5.5 4 4 7 4H17C20 4 22 5.5 22 9V16C22 19.5 20 21 17 21Z"
                  fill="white"
                />
                <path
                  d="M17 9.5L13.87 12C12.84 12.82 11.15 12.82 10.12 12L7 9.5"
                  stroke="#57AF60"
                  stroke-width="1.5"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>phuthotouristquan11@gmail.com</span>
            </div>
          </div>
          <div className="contact_giomocua">
            <h2>Giờ mở cửa</h2>
            <ul>
              <li>
                Ngày thường: <b>8h00 - 18h00</b> (bán vé 7h30 - 16h00)
              </li>
              <li>
                Cuối tuần + Lễ: <b>7h30 - 21h00</b> (bán vé từ 7h30 - 19h00)
              </li>
              <li>
                Công viên nghỉ <b>thứ 3</b> hàng tuần
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_hethong">
          <h2>Các đơn vị CÙNG hệ thống Phuthotourist</h2>
          <ul>
            <li>Công ty CP DVDL Phú Thọ</li>
            <li>Khu du lịch sinh thái Vàm Sát</li>
            <li>Khách sạn Ngọc Lan</li>
            <li>Khách sạn Phú Thọ</li>
            <li>Trung tâm Du lịch Đầm Sen</li>
            <li>Cà phê Vườn Đá</li>
          </ul>
        </div>
      </div>
      <div className="footer_line"></div>
      <div className="footer_copyright">
        <p>
          Copyright
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M9 16.5C4.86 16.5 1.5 13.14 1.5 9C1.5 4.86 4.86 1.5 9 1.5C13.14 1.5 16.5 4.86 16.5 9C16.5 13.14 13.14 16.5 9 16.5Z"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.1597 11.25C10.6272 11.715 9.93719 12 9.17969 12C7.52219 12 6.17969 10.6575 6.17969 9C6.17969 7.3425 7.52219 6 9.17969 6C9.93719 6 10.6272 6.285 11.1597 6.75"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>{" "}
          Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist)
        </p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import Layout from "../../layout";
import Footer from "../../components/footer";
import gioithieu_banner from "../../assets/banner_gioithieu.png";
import gioithieu_1 from "../../assets/gioithieu_1.png";
import gioithieu_2 from "../../assets/gioithieu_2.png";
import gioithieu_3 from "../../assets/gioithieu_3.png";
import gioithieu_4 from "../../assets/gioithieu_4.png";

//icon_giave
import icon_giave1 from "../../assets/icon_giave1.png";
import icon_giave2 from "../../assets/icon_giave2.png";
import icon_giave3 from "../../assets/icon_giave3.png";
import icon_giave4 from "../../assets/icon_giave4.png";

import bg_green from "../../assets/bg_gioithieu_green.png";
import TicketCard from "./TicketCard";
import "./TicketGrid.css";

import "./gioithieu.css";
const Gioithieu = () => {
  return (
    <Layout>
      <div className="gioithieu_container">
        <div className="gioithieu_banner">
          <img src={gioithieu_banner} alt="" />
          <p>
            Công viên Văn Hóa Đầm Sen với hơn 30 trò chơi, địa điểm check in và
            nhiều loại thú quý hiếm
          </p>
        </div>
        <div className="gioithieu_chitiet">
          <h1>Đầm sen thế giới tuyệt vời</h1>
          <div className="gioithieu_chitiet_frame">
            <div className="chitiet_frame_green">
              <div className="chitiet_frame_green_content">
                <img src={bg_green} alt="" />

                <div className="frame_green_text">
                  <h2>Hơn 30 trò chơi</h2>
                  <p>
                    Công viên Văn hóa Đầm Sen có 13 trò chơi cảm giác mạnh (Tàu
                    lượn siêu tốc, vượt thác, Power Surge…); 5 trò chơi tương
                    tác ảo công nghệ hiện đại; 5 trò chơi thư giãn; 12 trò chơi
                    thiếu nhi; và nhiều trò chơi khác.
                  </p>
                  <button className="chitiet_frame_green_button">
                    Xem thêm{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="30"
                        viewBox="0 0 31 30"
                        fill="none"
                      >
                        <path
                          d="M21.125 15L16.125 10M21.125 15L16.125 20M21.125 15L7.0625 15"
                          stroke="#259E58"
                          stroke-width="2.19373"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <div className="chitiet_frame_green_img">
              <img src={gioithieu_1} alt="" />
            </div>
          </div>
          <div className="gioithieu_chitiet_frame">
            <div className="chitiet_frame_pink_img">
              <img src={gioithieu_2} alt="" />
            </div>
            <div className="chitiet_frame_pink">
              <div className="chitiet_frame_pink_content">
                <img src={bg_green} alt="" />

                <div className="frame_pink_text">
                  <h2>Nhiều loại thú quý hiếm</h2>
                  <p>
                    Đầm Sen còn được biết đến như một vườn thú có thể nuôi sinh
                    sản được các loại động vật quý hiếm (thuộc sách đỏ) như:
                    đười ươi Sumatra (sinh 2 lần); vượn má vàng; chim già đẩy,
                    chim Giang sen… Ngoài ra còn có một Thủy cung với các loài
                    thủy sinh vật biển và cá Amazon phong phú, như cá mập, cá
                    Hải tượng (2 mét)…
                  </p>
                  <button className="chitiet_frame_pink_button">
                    Xem thêm{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="30"
                        viewBox="0 0 31 30"
                        fill="none"
                      >
                        <path
                          d="M21.125 15L16.125 10M21.125 15L16.125 20M21.125 15L7.0625 15"
                          stroke="#EC008C"
                          stroke-width="2.19373"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="gioithieu_chitiet_frame">
            <div className="chitiet_frame_green">
              <div className="chitiet_frame_green_content">
                <img src={bg_green} alt="" />

                <div className="frame_green_text">
                  <h2>Nhà hàng Thủy Tạ Đầm Sen</h2>
                  <p>
                    Ẩm thực trong Công viên Văn hóa Đầm Sen gồm nhiều món ăn
                    đường phố trong công viên, đặc biệt là nhà hàng Thủy Tạ, với
                    không gian thưởng thức ẩm thực bên hồ.
                  </p>
                  <button className="chitiet_frame_green_button">
                    Xem thêm{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="30"
                        viewBox="0 0 31 30"
                        fill="none"
                      >
                        <path
                          d="M21.125 15L16.125 10M21.125 15L16.125 20M21.125 15L7.0625 15"
                          stroke="#259E58"
                          stroke-width="2.19373"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="chitiet_frame_green_img">
              <img src={gioithieu_3} alt="" />
            </div>
          </div>
          <div className="gioithieu_chitiet_frame">
            <div className="chitiet_frame_pink_img">
              <img src={gioithieu_4} alt="" />
            </div>
            <div className="chitiet_frame_pink">
              <div className="chitiet_frame_pink_content">
                <img src={bg_green} alt="" />

                <div className="frame_pink_text">
                  <h2>Cà phê Vườn Đá</h2>
                  <p>
                    Cà phê Vườn đá có không gian rộng, và nhiều cây xanh tại Sài
                    Gòn. Đặc biệt, trong khuôn viên cà phê có một bộ sưu tập đá
                    khổng lồ, với nhiều hình dáng kỳ dị theo nhãn quan của mỗi
                    người. Buổi sáng thứ bảy và chủ nhật, quán thường đông khách
                    do có nhạc sống, với những ca khúc bất hủ của thập niên
                    70-80, do các ban nhạc chuyên nghiệp TP.HCM biểu diễn.
                  </p>
                  <button className="chitiet_frame_pink_button">
                    Xem thêm{" "}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="31"
                        height="30"
                        viewBox="0 0 31 30"
                        fill="none"
                      >
                        <path
                          d="M21.125 15L16.125 10M21.125 15L16.125 20M21.125 15L7.0625 15"
                          stroke="#EC008C"
                          stroke-width="2.19373"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gioithieu_hoatdong">
          <h1>Thời gian hoạt động</h1>
          <div className="thoithieu_hoatdong_box">
            <div className="thoithieu_hoatdong_box_1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="77"
                height="77"
                viewBox="0 0 77 77"
                fill="none"
              >
                <path
                  d="M9.625 28.875H67.375M36.575 67.375C32.9813 67.375 14.5012 67.375 13.1286 66.6756C11.9212 66.0604 10.9396 65.0788 10.3244 63.8714C9.625 62.4988 9.625 60.702 9.625 57.1083V26.3083C9.625 22.7147 9.625 20.9178 10.3244 19.5452C10.9396 18.3379 11.9212 17.3562 13.1286 16.741C14.5012 16.0417 16.298 16.0417 19.8917 16.0417H57.1083C60.702 16.0417 62.4988 16.0417 63.8714 16.741C65.0788 17.3562 66.0604 18.3379 66.6756 19.5452C67.375 20.9178 67.375 22.7147 67.375 26.3083V39.1417M22.4583 9.625V16.0417M54.5417 9.625V16.0417M19.25 41.7083H25.6667M19.25 54.5417H25.6667"
                  stroke="#259E58"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M55.824 47.8406V57.1091H61.3851M72.5073 57.1091C72.5073 66.3231 65.0379 73.7924 55.824 73.7924C46.61 73.7924 39.1406 66.3231 39.1406 57.1091C39.1406 47.8952 46.61 40.4258 55.824 40.4258C65.0379 40.4258 72.5073 47.8952 72.5073 57.1091Z"
                  stroke="#259E58"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <h3>NGÀY MỞ CỬA</h3>
              <p>
                Tất cả các ngày <br /> (trừ thứ 3)
              </p>
            </div>
            <div className="thoithieu_hoatdong_box_1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="77"
                height="77"
                viewBox="0 0 77 77"
                fill="none"
              >
                <g clip-path="url(#clip0_1_1969)">
                  <path
                    d="M36.8958 67.375C21.8167 67.375 9.625 54.4472 9.625 38.5C9.625 22.5528 22.5528 9.625 38.5 9.625C54.4472 9.625 67.375 22.5528 67.375 38.5C67.375 40.8528 67.0542 44.5958 65.7708 46.8417M38.5 22.4583V38.5L48.4458 33.6875"
                    stroke="#259E58"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M45.4144 63.2041C45.4144 60.7595 43.867 58.6798 41.707 57.909V54.9691C41.707 53.9209 41.707 53.3968 41.9091 52.9965C42.0868 52.6443 42.3704 52.358 42.7192 52.1786C43.1157 51.9746 43.6348 51.9746 44.673 51.9746H72.1078C73.1459 51.9746 73.665 51.9746 74.0616 52.1786C74.4104 52.358 74.6939 52.6443 74.8717 52.9965C75.0737 53.3968 75.0737 53.9209 75.0737 54.9691V57.9087C72.9138 58.6794 71.3663 60.7595 71.3663 63.2041C71.3663 65.6488 72.9138 67.7281 75.0737 68.4989V71.4385C75.0737 72.4867 75.0737 73.0107 74.8717 73.4111C74.6939 73.7632 74.4104 74.0495 74.0616 74.229C73.665 74.4329 73.1459 74.4329 72.1078 74.4329H44.673C43.6348 74.4329 43.1157 74.4329 42.7192 74.229C42.3704 74.0495 42.0868 73.7632 41.9091 73.4111C41.707 73.0107 41.707 72.4867 41.707 71.4385V68.4992C43.867 67.7285 45.4144 65.6488 45.4144 63.2041Z"
                    stroke="#259E58"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1969">
                    <rect width="77" height="77" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h3>GIỜ BÁN VÉ</h3>
              <p>
                Ngày thường: <b>7h30 - 16h00</b> <br /> Cuối tuần + Lễ:{" "}
                <b>7h30 - 16h00</b>
              </p>
            </div>
            <div className="thoithieu_hoatdong_box_1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="77"
                height="77"
                viewBox="0 0 77 77"
                fill="none"
              >
                <g clip-path="url(#clip0_1_1978)">
                  <path
                    d="M36.9995 66C21.9203 66 9.94531 54.4472 9.94531 38.5C9.94531 22.5528 22.8731 9.625 38.8203 9.625C54.7675 9.625 67.6953 22.5528 67.6953 38.5C67.6953 40.8528 67.3745 42.35 67.0536 43.6333M38.8203 22.4583V38.5L48.7661 33.6875"
                    stroke="#259E58"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M38.8203 75.0756L56.4661 75.0755V47.9721C56.4661 45.5092 56.4661 44.2778 56.0148 43.4242C55.6191 42.6758 54.9964 42.1136 54.2615 41.8411C53.4233 41.5304 52.3553 41.7975 50.2192 42.3318L46.0484 43.375C44.6141 43.7338 43.8969 43.9132 43.3616 44.3473C42.8894 44.7302 42.5186 45.2504 42.289 45.8523C42.0286 46.5346 42.0286 47.3615 42.0286 49.0154V75.0756M58.0703 46.1861H59.3536C61.1505 46.1861 62.0489 46.1861 62.7352 46.5797C63.3389 46.9259 63.8297 47.4783 64.1373 48.1578C64.487 48.9303 64.487 49.9415 64.487 51.964V75.0756H67.6953M51.6536 58.8253H51.6697"
                    stroke="#259E58"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_1978">
                    <rect width="77" height="77" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h3>GIỜ HOẠT ĐỘNG</h3>
              <p>
                Ngày thường: <b>8h00 - 18h00</b> <br /> Cuối tuần + Lễ:{" "}
                <b>7h30 - 21h00</b>
              </p>
            </div>
          </div>
        </div>
        <div className="gioithieu_giave">
          <h1>Giá vé</h1>
          <div className="ticket-grid">
            <div className="ticket-row">
              <TicketCard
                title="Vé Khách Lẻ"
                price="80k - 380k/vé/người"
                description="Là loại vé được bán tại các quầy trong công viên cho từng khách. Đây là các loại vé trọn gói đã được trừ vé vào cổng của quý khách"
                buttonText="Xem thêm"
                imageUrl={icon_giave1}
                backgroundColor="#259E58" 
                textColor="#259E58"
                svgColor="#259E58"
              />
              <TicketCard
                title="Vé Thể Dục"
                price="5k/vé/người"
                description="Quý khách có thể vào CVVH Đầm Sen để tập thể dục quanh hồ thoáng mát vào mỗi buổi sáng, trên diện tích 32 hecta với nhiều cây xanh và không khí trong lành"
                buttonText="Xem thêm"
                imageUrl={icon_giave2}
                backgroundColor="#EC008C" 
                textColor="#EC008C"
                svgColor="#EC008C"
              />
            </div>
            <div className="ticket-row">
              <TicketCard
                title="Vé Dịch Vụ"
                price="120k - 380k/vé/người"
                description="Vé dịch vụ gồm có các dịch vụ như xe điện, giữ đồ, cho thuê xe đẩy, xe nôi, xe lăn."
                buttonText="Xem thêm"
                imageUrl={icon_giave3}
                backgroundColor="#EC008C" 
                textColor="#EC008C"
                svgColor="#EC008C"
              />
              <TicketCard
                title="Vé Tập Thể"
                price="120k - 380k/vé/người"
                description="Nhóm bạn, cơ quan đoàn thể, Trường học, công ty du lịch, công nhân, chúng tôi có giá vé tập thể ưu đãi cho Quý cơ quan khi đến tham quan vui chơi tại CVVH Đầm Sen"
                buttonText="Xem thêm"
                imageUrl={icon_giave4}
                backgroundColor="#259E58"
                textColor="#259E58"
                svgColor="#259E58"
              />
            </div>
          </div>
          <div className="gioithieu_giave_luuy">
            <h5>Chú ý</h5>
            <ul>
              <li>
                <b>Giờ bán vé:</b> 8 giờ 00 - 17 giờ 30
              </li>
              <li>
                <b>Vé mua từ cổng:</b> Vé được bán tại 2 cổng chính: số 1A Lạc
                Long Quân (hoặc số 3 Hòa Bình) và cổng số 2 (nhà hàng Thủy Tạ).
              </li>
              <li>
                <b>Vé mua trong công viên:</b> Loại vé bán tại các quầy trong
                công viên. Đây là vé trọn gói đã được trừ vé vào cổng của quý
                khách.
              </li>
              <li>
                <b>Vé từ cổng Công viên nước:</b> Vé bán từ cổng liên thông phía
                công viên nước. Dành cho du khách vui chơi tại công viên nước và
                muốn sang CVVH Đầm Sen.
              </li>
              <li>
                <b>&gt; 1,4m:</b> Người cao trên 1,4m
              </li>
              <li>
                <b>&lt; 1,4m:</b> Người cao dưới 1,4m
              </li>
              <li>
                <b>Trẻ em dưới 1m:</b> Miễn phí (phải đi cùng với người lớn).
              </li>
              <li>
                <b>Vé mời:</b> Giảm 50% vé trọn gói (áp dụng mua từ cổng).
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Gioithieu;

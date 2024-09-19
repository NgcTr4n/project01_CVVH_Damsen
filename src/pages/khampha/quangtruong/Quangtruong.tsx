import React from "react";
import Footer from "../../../components/footer";
import Layout from "../../../layout";

import "./Quangtruong.css";
import CardFooter from "./CardFooter";
import image418 from "../../../assets/image_418.png";
import image314 from "../../../assets/image_314.png";
import image368 from "../../../assets/image_368.png";
import image369 from "../../../assets/image_369.png";
import image370 from "../../../assets/image_370.png";
import image380 from "../../../assets/image_380.png";
import image381 from "../../../assets/image_381.png";
import image_01 from "../../../assets/Image_01.png";
import image_02 from "../../../assets/Image_02.png";
import image_03 from "../../../assets/Image_03.png";
import image_04 from "../../../assets/Image_04.png";
import image_408 from "../../../assets/image_408.png";

import CarouselComponent from "./CarouselComponent";
import CarouselComponent01 from "./CarouselComponent01";
import CarouselComponent02 from "./CarouselComponent02";
import CarouselComponent03 from "./CarouselComponent03";

// const imageUrls1  = [
//   { url: image_01, caption: 'Cảnh làm lễ giỗ quốc tổ tại quảng trường vua Hùng 2019' },
//   { url: image_01, caption: 'Cảnh làm lễ giỗ quốc tổ tại quảng trường vua Hùng 2019' },
//   { url: image_01, caption: 'Cảnh làm lễ giỗ quốc tổ tại quảng trường vua Hùng 2019' },
//   { url: image_01, caption: 'Cảnh làm lễ giỗ quốc tổ tại quảng trường vua Hùng 2019' },
// ];
// const imageUrls2  = [
//   { url: image_02, caption: 'Du khách đến dâng hương nhận lộc bánh chưng từ Đầm Sen' },
//   { url: image_02, caption: 'Du khách đến dâng hương nhận lộc bánh chưng từ Đầm Sen' },
//   { url: image_02, caption: 'Du khách đến dâng hương nhận lộc bánh chưng từ Đầm Sen' },
//   { url: image_02, caption: 'Du khách đến dâng hương nhận lộc bánh chưng từ Đầm Sen' },
// ];

// const imageUrls3  = [
//   { url: image_03, caption: 'Quãng trường Vua Hùng' },
//   { url: image_03, caption: 'Quãng trường Vua Hùng' },
//   { url: image_03, caption: 'Quãng trường Vua Hùng' },
//   { url: image_03, caption: 'Quãng trường Vua Hùng' },
// ];
// const imageUrls4  = [
//   { url: image_04, caption: 'Làm chiếc bánh chưng khổng lồ tại Đầm Sen năm 2016' },
//   { url: image_04, caption: 'Làm chiếc bánh chưng khổng lồ tại Đầm Sen năm 2016' },
//   { url: image_04, caption: 'Làm chiếc bánh chưng khổng lồ tại Đầm Sen năm 2016' },
//   { url: image_04, caption: 'Làm chiếc bánh chưng khổng lồ tại Đầm Sen năm 2016' },
// ]

const QuangTruong = () => {
  return (
    <Layout>
      <div className="giave_container">
        <div className="banner_giave">
          <img src={image418} />
        </div>
        <div className="banner_content">
          <div className="banner_content_h1">
            <h1>Quảng trường vua Hùng</h1>

            {/* Div chứa phần Cảnh đẹp và Ngày */}
            <div className="banner_content_info">
              {/* Icon và text Cảnh đẹp */}
              <div className="info_item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M19.83 8.6998L15.3 4.1698C14.35 3.2198 13.04 2.7098 11.7 2.7798L6.70001 3.0198C4.70001 3.1098 3.11001 4.6998 3.01001 6.6898L2.77001 11.6898C2.71001 13.0298 3.21001 14.3398 4.16001 15.2898L8.69001 19.8198C10.55 21.6798 13.57 21.6798 15.44 19.8198L19.83 15.4298C21.7 13.5798 21.7 10.5598 19.83 8.6998ZM9.50001 12.3798C7.92001 12.3798 6.62001 11.0898 6.62001 9.4998C6.62001 7.9098 7.92001 6.6198 9.50001 6.6198C11.08 6.6198 12.38 7.9098 12.38 9.4998C12.38 11.0898 11.08 12.3798 9.50001 12.3798ZM17.53 13.5298L13.53 17.5298C13.38 17.6798 13.19 17.7498 13 17.7498C12.81 17.7498 12.62 17.6798 12.47 17.5298C12.18 17.2398 12.18 16.7598 12.47 16.4698L16.47 12.4698C16.76 12.1798 17.24 12.1798 17.53 12.4698C17.82 12.7598 17.82 13.2398 17.53 13.5298Z"
                    fill="#EC008C"
                  />
                </svg>
                <p className="canhdep">Cảnh đẹp</p>
              </div>

              {/* Icon và text ngày tháng */}
              <div className="info_item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M10 5.83333V10L12.0833 11.25M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z"
                    stroke="#666666"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="time">11/02/2020</p>
              </div>
            </div>
          </div>

          <div className="banner_content_mota">
            <h6>Mô tả</h6>
            <p>Quảng trường Vua Hùng trong ngày giỗ quốc tổ</p>
          </div>
        </div>

        <div className="baomat_mochoatdong">
          <div className="thanhvien_content">
            <div style={{ width: "973px" }}>
              <p style={{ width: "100%" }}>
                Hàng ngàn du khách đã đến dâng hương trước tượng Hùng Vương tại
                Quảng trường vua Hùng trong ngày 14/4/2019. Đây là quảng trường
                thứ 3 của CVVH Đầm Sen đưa vào hoạt động. (Trước đó, Đầm Sen đã
                có quảng trường Âu Lạc và quảng trường La Mã chuyên phục vụ sự
                kiện). Đền thờ này được xem như một cúng phẩm dâng lên trong
                ngày giổ Quốc tổ.
              </p>
            </div>
          </div>
        </div>

        <div className="baomat_mochoatdong">
          <h5>Ra mắt Quảng trường vua Hùng</h5>
          <p>
            Quảng trường này có tổng diện tích gần 1000m2. Bao gồm sân hành lễ
            được lát đá Granite với hoa văn mặt trời đặt ở chính giữa. Kế đến là
            thang rồng, tiết diện bề ngang 4,5 mét, đáp ứng đoàn khách 5 hàng.
            Trên cùng là khu vực dâng hương, được thiết kế 3 đền thờ. Chính giữa
            là chánh điện với tượng vua Hùng cao 1,7 mét, được làm bằng chất
            liệu composite phủ đồng, đặt trên bệ đá cao 0,8m.
          </p>
        </div>
        <div className="banner_giave">
          <img src={image418} />
          <p>Quảng trường vua Hùng trong ngày giỗ quốc tổ</p>
        </div>
        <div className="baomat_mochoatdong">
          <p>
            Bức tượng vua Hùng tại Đầm Sen đã được Thạc sĩ – Điêu khắc gia Phạm
            Văn Út thực hiện. Tác giả đã xây dựng bố cục vua Hùng ngồi trên
            ngai, cách điệu từ hoa văn trống đồng. Mặt tượng nhìn thẳng thể hiện
            sự tôn nghiêm. Tay phải nắm chùm bông lúa, ý muốn đề cao một nền văn
            hóa lúa nước của dân tộc Việt, cho con cháu đời sau phải gìn giữ và
            tôn vinh. Tay trái để tự nhiên trong tư thế ngồi trao đổi với các
            Lạc tướng, Lạc hầu. Các hoa văn trang trí trên bộ trang phục, được
            lấy cảm hứng từ đường nét của nền văn hóa Đông Sơn. Đặc biệt là hoa
            văn trên trống đồng Ngọc Lũ.
          </p>
        </div>
        <div className="part">
          <div className="image">
            <div>
              <img src={image368} />
              <p>Bức tượng vua Hùng mới được đặt tại Đầm Sen</p>
            </div>
            <div>
              <img src={image369} />
              <p className="Decrip">Điêu khắc gia Phạm Văn Út</p>
            </div>
          </div>
          <div className="banner_giave">
            <img src={image370} />
            <p>Chánh điện thờ vua Hùng trong ngày giỗ tổ</p>
          </div>
        </div>

        <div className="baomat_mochoatdong">
          <p>
            Bên cạnh đó, chủ tịch Hồ Chí Minh từng nói: “Các vua Hùng đã có công
            dựng nước, Bác cháu ta phải cùng nhau giữ lấy nước” (xem lịch sử câu
            nói tại đây). Thấu hiểu điều đó, Phuthotourist không chỉ hướng ý
            thức của du khách đến viếng người có công dựng nước, mà còn muốn
            nhắc đến công giữ nước của những danh tướng đã làm nên lịch sử. Đó
            là đền thờ Hưng Đạo Vương, vị vua từng đánh tan hai cuộc xâm lược
            của quân Nguyên – Mông (năm 1285 và năm 1288). Hưng Đạo Vương còn
            lưu truyền thế hệ sau bằng bài thơ “Hịch tướng sĩ”.{" "}
          </p>{" "}
        </div>
        <div className="banner_giave">
          <img src={image380} />
          <p>Gian thờ Hưng Đạo Vương đặt bên phải, với bào thơ Hịch Tướng Sĩ</p>
        </div>

        <div className="baomat_mochoatdong">
          <p>
            Danh tướng thứ hai là Hai Bà Trưng (xem thông tin lịch sử tại đây).
            Hai nữ anh hùng dân tộc đầu tiên của đất Việt, phất cờ khởi nghĩa.
            Và lập quốc gia với kinh đô tại Mê Linh. Bà Trưng Trắc lên ngôi Nữ
            vương, trở thành vị vua nữ đầu tiên trong trong lịch sử Việt Nam.
            Với danh hiệu Trưng Nữ Vương. Cả hai biểu tượng danh tướng đều được
            đặt hai bên chánh điện, trong khuôn viên của quảng trường vua Hùng.
            (xem thêm về lễ khánh thành tượng Hai Bà Trưng tại đây)
          </p>{" "}
        </div>
        <div className="banner_giave">
          <img src={image381} />
          <p>Tượng Hai Bà Trưng trên mình voi</p>
        </div>
        <div className="split"></div>

        <div className="baomat_mochoatdong">
          <h5>Ngày giỗ tổ đầu tiên trước linh tượng</h5>
          <p>
            8 giờ sáng ngày 14/4/2019, Phuthotourist cùng UBND Quận 11, Mặt trận
            tổ quốc VN Quận 11, Viện Lịch sử các dòng họ, đã tổ chức lễ dâng
            hương đầu tiên trước linh tượng vua Hùng. Và đây cũng là sự kiện ra
            mắt quảng trường Hùng Vương tại Đầm Sen. Hàng ngàn người dân và du
            khách đã đem lễ vật đến đây để dâng lên quốc tổ, cùng ôn lại lịch sử
            dân tộc ngàn năm.{" "}
          </p>
        </div>

        <div className="slider_thanhvien">
          <CarouselComponent />
        </div>

        <div className="baomat_mochoatdong">
          <p>
            Bên cạnh đó, Đầm Sen cũng tổ chức thi nấu bánh chưng với sự tham gia
            của các đơn vị trong quận 11. Tổng số bánh chưng 3000 chiếc đã được
            phát lộc cho du khách đến dâng hương tại quảng trường ngay trong
            buổi sáng giỗ tổ.
          </p>
        </div>
        <div className="slider_thanhvien">
        <CarouselComponent01 />
        </div>

        <div className="baomat_mochoatdong">
          <p>
            Trước đó, Đầm Sen cũng tổ chức lễ diễu hành đặc biệt vào chiều ngày
            13/4/2019. Buổi diễn hành này nhằm giới thiệu quảng trường vua Hùng
            với nhân dân trên địa bàn quận 11.{" "}
          </p>
        </div>
        <div className="slider_thanhvien">
        <CarouselComponent02 />
        </div>
        <div className="baomat_mochoatdong">
          <h5>Từ chiếc bánh chưng khổng lồ</h5>
          <p>
            Trước 2007, Phuthotourist từng tự tổ chức ngày giổ tổ Hùng Vương tại
            Đầm Sen vào ngày 10/3 âm lịch. Với mục đích ban đầu là tạo địa điểm
            để nhân viên Phuthotourist và những du khách tưởng nhớ tổ tiên dân
            tộc. Số lượng khách tham dự lúc bấy giờ lên đến cả chục ngàn người,
            vượt xa dự tính ban đầu.
          </p>
        </div>
        <div className="slider_thanhvien">
          <CarouselComponent03 />
        </div>
        <div className="baomat_mochoatdong">
          <p>
            Sau khi Quốc Hội quyết định công nhận ngày quốc tổ vào tháng 4/2007,
            Phuthotourist đã phối hợp với UBMT Tổ Quốc Quận 11, tổ chức nhiều
            hoạt động lớn hơn. Tuy nhiên, Đầm Sen vẫn mong muốn làm được cống
            vật gì xứng đáng. Và phải mang ý nghĩa góp công sức của tập thể. Vậy
            là ý tưởng về chiếc bánh chưng khổng lồ ra đời từ những năm đầu
            2010. Và đến năm 2016, Đầm Sen đã xác lập kỷ lục Guinness Thế giới
            với chiếc bánh chưng khổng lồ nặng nhất: 2,5 Tấn. Để làm chiếc bánh
            chưng này, đã có hơn 50 người với nhiều công đoạn gói, nấu bánh khác
            thường. Sau đó luộc suốt 3 ngày liên tục để dâng cúng Quốc tổ.
          </p>{" "}
        </div>

        <div className="baomat_mochoatdong">
          <h5>Đến nhu cầu cần một đền thờ vua Hùng</h5>
          <p>
            Từ những thành công đó, Phuthotourist lại tiếp tục suy nghĩ: Nếu như
            nhà thờ không thể thiếu tượng chúa, Đình chùa không thể vắng tượng
            phật. Thì một nơi mà hàng ngàn người dân cùng hướng về tổ tiên lại
            càng không thể thiếu một linh tượng.
          </p>{" "}
        </div>
        <div className="banner_giave">
          <img src={image_408} />
          <p>
            Các vị lãnh đạo và đại biểu lên dâng hương trước linh tượng vua Hùng
            tại Đầm Sen
          </p>
        </div>
        <div className="baomat_mochoatdong">
          <p>
            Qua một khảo sát, cho thấy các địa điểm thờ phụng vua Hùng chỉ tập
            trung khách viếng vào ngày 10/3 âm lịch. Còn những ngày thường thì
            do mưu sinh cuộc sống, nên ít người lui tới. Thời gian rảnh rỗi chủ
            yếu vui chơi để phục hồi sức khỏe làm việc. Vì vậy, việc xây dựng
            một đền thờ vua Hùng vào khu vui chơi giải trí là việc nên làm. Khi
            du khách dạo chơi qua đây, sẽ dành vài phút tưởng nhớ đến các bậc
            anh linh đất Việt. Và truyền dạy cho con trẻ về chân dung của những
            vị vua nhân ái của đất nước.
          </p>
        </div>
        <div className="baomat_mochoatdong">
          <h5>Những khó khăn khi thực hiện</h5>
          <p>
            Mặc dù đã lên phương án xây dựng một Quảng trường vua Hùng từ nhiều
            năm. Nhưng khó khăn nhất là vấn đề chân dung của vua Hùng. Trong
            nhận thức của người Việt, một vị vua cha phải mang những nét anh
            minh và đức độ; nghiêm khắc nhưng bao dung; hiền hậu nhưng quyết
            đoán. Để lột tả được những nét đặc trưng đó, quả là điều không dễ.
            Điều này đã được bàn đi bàn lại, từ đường nét gương mặt; trang phục;
            vóc dáng; tư thế; cho đến cả chất liệu sao cho dễ di chuyển.
          </p>{" "}
        </div>
        <div className="banner_giave">
          <img src={image418} />
          <p>
            Sân hành lễ với sức chứa hàng ngàn người trong ngày đầu tiên ra mắt
            quảng trường vua Hùng tại Đầm Sen
          </p>
        </div>
        <div className="baomat_mochoatdong">
          <p>
            Khó khăn kế tiếp là mặt bằng để xây dựng đền thờ. Với một nơi quy tụ
            mọi tầng lớp nhân dân đến vui chơi như Đầm Sen, thì việc tìm vị trí
            xây dựng khu linh thiêng, trang trọng không phải dễ. Đặc biệt là khi
            ý thức người dân về bảo vệ môi trường cảnh quan chưa cao. Việc xả
            rác bừa bãi, ăn nằm vạ vật nơi linh thiêng, chưa kể việc khắc tên vẽ
            bậy vẫn thường diễn ra ở nhiều nơi tôn nghiêm khiến ban lãnh đạo
            công ty phải suy nghĩ. Phuthotourist đã phối hợp với Viện nghiên cứu
            lịch sử, viện lịch sử dòng họ… để tìm giải pháp. Đồng thời tìm kiếm
            những nhà điêu khắc có kinh nghiệm để cùng bàn bạc ý tưởng; phác họa
            nên một chân dung vị vua Hùng dân tộc. Và cuối cùng, ngày 14/4/2019,
            Quảng trường vua Hùng chính thức ra mắt tại Đầm Sen. Mở thêm một địa
            điểm mới để người dân đến đây dâng hương trong những ngày giỗ quốc
            tổ.
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
              Địa điểm sống ảo
            </a>
            <a href="#" className="nav-link-sukien">
              Quảng trường Âu Lạc{" "}
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

export default QuangTruong;

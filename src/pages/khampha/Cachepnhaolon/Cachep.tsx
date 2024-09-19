import React from "react";
import Footer from "../../../components/footer";
import Layout from "../../../layout";


import "./Cachep.css";
// import CardFooter from "./CardFooter";
// import cachep01 from "../../../assets/Cachep/cachep_01.png"
// import cachep02 from "../../../assets/Cachep/cachep_02.png"
// import cachep04 from "../../../assets/Cachep/cachep_04.png"
import banner_cachep from "../../../assets/Cachep/banner_cachep.png"
import CarouselComponent from "./CarouselComponent";
import CardFooter from "./CardFooter";

// const imageUrls = [
//   cachep01,
//   cachep02,
//   cachep04,
//   cachep04,
// ];
// const caption =
//   'Vua đầu bếp "Yan Can Cook" từng đến giao lưu với đội ngũ bếp của nhà hàng Thủy Tạ Đầm Sen';
//   'aaaaaa';
//   'aaa'

  
  // const imageUrls = [
  //   { imageUrls: cachep01, caption: 'Cá chép nhào lộn' },
  //   { imageUrls: cachep02, caption: 'Trò chơi cảm giác mạnh' },
  //   { imageUrls: cachep04, caption: 'Trò chơi thú vị tại Đầm Sen' },
  //   { imageUrls: cachep04, caption: 'Trò chơi gia đình' },
  //   { imageUrls: cachep04, caption: 'Trò chơi nổi bật' }
  // ];
  

const Cachep = () => {
  return (
    <Layout>
      <div className="giave_container">
        <div className="banner_giave">
          <img src={banner_cachep} />
        </div>
        <div className="banner_content">
          <div className="banner_content_h1">
            <h1>Cá chép nhào lộn </h1>
          </div>
          <div className="banner_content_mota">
            <h6>Mô tả</h6>
            <p>Trò chơi Cá chép nhào lộn tại CVVH Đầm Sen</p>
          </div>
        </div>
        <div className="baomat_mochoatdong">
          <div className="thanhvien_content">
            <div style={{ width: "973px" }}>

              <p style={{ width: "100%" }}>
              Cá chép nhào lộn là trò chơi cảm giác mạnh do Công ty Cổ phần Dịch vụ Du lịch Phú Thọ (Phuthotourist) đầu tư tại CVVH Đầm Sen. Đây là trò chơi hình thức con lắc Pendulum. Trò chơi gồm 2 con tàu hình cá chép, đong đưa theo trục đứng. Trò chơi này cũng tương tự như Phượng hoàng bay, nhưng có thể đánh vòng đến 360 độ.
              Người chơi ngồi bên trên sẽ được đưa lên cao đến hơn 10m, rồi rơi tự do xuống, lại bật lên nhiều vòng. Đỉnh điểm là khi cặp cá chép nhào lộn ngược trên không, khiến người chơi phải la hét vì phấn khích. Trò chơi nằm ở khu cảm giác mạnh tại cổng số 1 (đường Lạc Long Quân).
              </p>
            </div>
          </div>
        </div>
        <div className="slider_thanhvien">
        <CarouselComponent />
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
              Roller Coaster
            </a>
            <a href="#" className="nav-link-sukien">
            Phượng hoàng bay{" "}
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

export default Cachep;

import React, { useEffect } from "react";
import Footer from "../../../components/footer";
import Layout from "../../../layout";


import "./Cachep.css";

import CarouselComponent from "./CarouselComponent";
import CardFooter from "./CardFooter";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchCachepcontent } from "../../../features/cachepcontentSlide";

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
  const dispatch = useAppDispatch();
  const { cachepcontent, loading, error } = useAppSelector((state) => state.cachepcontent);

  
  useEffect(() => {
    dispatch(fetchCachepcontent());
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
        {cachepcontent.map((item, index)=>(
          <img src={item.banner} />
        ))}
        </div>
        <div className="banner_content">
          <div className="banner_content_h1">
          {cachepcontent.map((item, index)=>(
              <h1 key={index}>{item.title}</h1>
            ))}
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
                {cachepcontent.map((item, index)=>(
              <p className="canhdep" key={index}>{item.content}</p>
            ))}
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
              {cachepcontent.map((item, index)=>(
              <p className="time" key={index}>{item.date}</p>
            ))}
              </div>
            </div>
          </div>
          <div className="banner_content_mota">
            <h6>Mô tả</h6>
            {cachepcontent.map((item, index)=>(
              <p key={index}>{item.mota}</p>
            ))}
          </div>
        </div>
        <div className="baomat_mochoatdong">
          <div className="thanhvien_content">
            <div style={{ width: "973px" }}>

            {cachepcontent.map((item, index)=>(
              <p key={index}>{item.description}</p>
            ))}
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

import React from 'react';
import Layout from '../../../layout';
import banner_khiduoidai from '../../../assets/banner_khiduoidai.png'
import Footer from '../../../components/footer';
import ImageWithCaption from './ImageWithCaption';
import InfoSection from './InfoSection';
import monkey1 from '../../../assets/monkey1.png'
import monkey2 from '../../../assets/monkey2.png'
import monkey3 from '../../../assets/monkey3.png'
import './khiduoidai.css'
import CardFooter from './CardFooter';


const khiduoidai = () => {
    return (
        <Layout>
        <div className="giave_container">
          <div className="banner_giave">
            <img src={banner_khiduoidai} />
          </div>
          <div className="banner_content">
            <div className="banner_content_h1">
              <h1>Khỉ đuôi dài</h1>
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
                <p className="canhdep">Vườn thú</p>
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
                <p className="time">04/01/2021</p>
              </div>
            </div>
            </div>
            <div className="banner_content_mota">
            <h6>Mô tả</h6>
            <p>
              Chính sách bảo mật này nhằm mục đích giúp bạn hiểu rõ những thông
              tin chúng tôi thu thập, lý do chúng tôi thu thập và cách bạn có
              thể cập nhật, quản lý, xuất và xóa thông tin của mình.
            </p>
          </div>
          </div>
         
        
        
        
          <div className="baomat_mochoatdong">
          <div className="container_khiduoidai">
      <div className="section_khiduoidai">
        <ImageWithCaption src={monkey1} caption="Loài khỉ đuôi dài" />
        <InfoSection
          title="Tìm hiểu về khỉ đuôi dài"
          description="Khỉ đuôi dài (Macaca fascicularis) có đuôi dài gần bằng hoặc hơn chiều dài cơ thể (khoảng 50 cm), và là loài có đuôi dài nhất. Lông chúng thường có màu xám đến nâu đỏ. Màu lông phía sau nhạt hơn, và lông trên đầu mọc hướng về sau. Thường có mào. Mặt có màu hồng. "
        />
      </div>
      
      <div className="section_khiduoidai reverse">
        <InfoSection
          title=""
          description="Con đực lớn thường có hai chỏm lông trắng trên miệng như bộ ria. Con cái có lông quanh mồm thưa hơn. Con non sinh ra có màu đen. Thức ăn chủ yếu là quả, hạt, nõn cây, lá và động vật như côn trùng, ếch, nhái, cua…. Chúng hoạt động vào ban ngày và trên cây. Loài này bơi rất giỏi và thường nhảy xuống nước từ cành cây.
Trong tự nhiên, Khỉ đuôi dài sống thành đàn từ 10-100 con. Trung bình 1 con đực sẽ có 2,5 con cái. Mỗi lần mang thai từ 160 – 170 ngày. Và chỉ sinh 1 con. Điểm đặc biệt khỉ chúa là dáng vẻ oai phong. Đồng thời, khỉ chúa chỉ “cưng nhất” một chú khỉ con nào đó. Và chú khỉ con ấy sẽ được xem là “thái tử” kế vị ngôi sau này."
        />
        <ImageWithCaption src={monkey2} caption="Khỉ đực bảo vệ chim con" />
      </div>
      <div className="section_khiduoidai">
        <ImageWithCaption src={monkey3} caption="Linh về khỉ đuôi dài" />
        <InfoSection
          title="Cuộc chiến quyền lực"
          description="Nếu con khỉ đực nào trong bầy có ý định “léng phéng” với các tề thiếp của khỉ chúa, nó sẽ bị đánh đuổi ra khỏi đàn. Còn nếu muốn “đảo chính” thì không hề dễ bởi vóc dáng to lớn của khỉ chúa. Thường thì đám khỉ đực chỉ dám “giành ngôi” khi khỉ chúa già hoặc bệnh tật. Còn không thì chúng phải di tản sang địa bàn khác, hoặc lẩn tránh khi khỉ chúa xuất hiện.
Những con khỉ bị phế truất như vậy sẽ lang thang tìm bầy khác gia nhập. Hoặc tìm những bầy yếu hơn để khiêu chiến. Chúng đánh nhau “một mất một còn”, và nếu nó thắng, bầy đó là của nó. Đó là bản chất của đời sống hoang dã.
Loại khỉ đuôi dài này đang được chăm sóc tại khu vườn thú của Công viên Văn hóa Đầm Sen."
        />
      </div>
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
              Vượn đen má vàng            </a>
            <a href="#" className="nav-link-sukien">
            Cá hỏa tiễn{" "}
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

export default khiduoidai;
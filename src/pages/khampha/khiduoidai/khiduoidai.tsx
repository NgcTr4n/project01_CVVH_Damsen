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
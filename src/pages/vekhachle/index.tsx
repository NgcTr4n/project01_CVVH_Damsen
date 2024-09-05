import React from "react";
import Layout from "../../layout";
import Footer from "../../components/footer";
import './vekhachle.css'
import banner_giave from "../../assets/banner_giave.png";
const Vekhachle = () => {
  return (
    <Layout>
      <div className="giave_container">
        <div className="banner_giave">
          <img src={banner_giave} />
        </div>
        <div className="banner_content">
          <div className="banner_content_h1">
            <h1>Vé trong công viên</h1>
          </div>
          <div className="banner_content_mota">
            <h6>Mô tả</h6>
            <p>
              Đầm Sen là điểm check-in được ưa chuộng của giới trẻ hiện nay.
            </p>
          </div>
        </div>
        <div className="giave_sticket_section">
          <div className="giave_sticket_green">
            <div className="giave_sticket_green_title">
            <h2>VÉ THAM QUAN</h2>
            </div>
            <ul className="sticket_dichvu">
              <li className="sticket_dichvu_null">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M4.5 12.6111L9.42308 17.5L20.5 6.5"
                    stroke="#259E58"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Tham quan trong ngày
              </li>
              <li className="sticket_dichvu_none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M6.5 6L18.5 18M18.5 6L6.5 18"
                    stroke="#FF0000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Bao gồm trò chơi
              </li>
              <li className="sticket_dichvu_none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M6.5 6L18.5 18M18.5 6L6.5 18"
                    stroke="#FF0000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>{" "}
                Dịch vụ xe điện
              </li>
            </ul>
            <ul className="sticket_noidung">
              <li>
                <b style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '150%'}}>Mua từ cổng</b>
               
                  <p  style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '150%'}}> + 120.000 VNĐ/người (&gt; 1.4m)</p> 
                  <p  style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '150%'}}> + 80.000 VNĐ/trẻ con (&lt; 1.4m)</p>
              </li>
              <li>
                <b style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '150%'}}>Mua từ cổng Công viên nước:</b>
                
                  <p  style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '150%'}}> + 80.000 VNĐ/người (&gt; 1.4m)</p>
                  <p  style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '150%'}}> + 50.000 VNĐ/trẻ em (&lt; 1.4m)</p>
              </li>
            </ul>
          </div>
          <div className="giave_sticket_pink">
            <div className="giave_sticket_pink_title">            <h2>VÉ TRỌN GÓI</h2>
            </div>
            <ul className="sticket_dichvu">
              <li className="sticket_dichvu_null"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M4.5 12.6111L9.42308 17.5L20.5 6.5" stroke="#259E58" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Tham quan trong ngày</li>
              <li className="sticket_dichvu_null"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M4.5 12.6111L9.42308 17.5L20.5 6.5" stroke="#259E58" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Bao gồm trò chơi</li>
              <li className="sticket_dichvu_none"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M6.5 6L18.5 18M18.5 6L6.5 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Thủy cung</li>
              <li className="sticket_dichvu_none"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M6.5 6L18.5 18M18.5 6L6.5 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Dịch vụ xe điện</li>
            </ul>
            <ul className="sticket_noidung">
              <li>
                <b style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '150%'}}>Mua từ cổng</b>
                  <p  style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '150%'}}> + 260.000 VNĐ/người (&gt; 1.4m)</p>
                  <p  style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '150%'}}> + 180.000 VNĐ/người (&lt; 1.4m)</p>
              </li>
              <li>
                <b style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '150%'}}>Mua từ cổng Công viên nước:</b>
                  <p  style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '150%'}}> + 220.000 VNĐ/người (&gt; 1.4m)</p>
                  <p  style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '150%'}}> + 150.000 VNĐ/người (&lt; 1.4m)</p>
              </li>
              <li>
                <b style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '150%'}}>Mua trong công viên:</b>
               
                  <p  style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '150%'}}> + 220.000 VNĐ/người</p>
              </li>
            </ul>
          </div>
          <div className="giave_sticket_blue">
            <div className="giave_sticket_blue_title">
            <h2>VÉ SILVER</h2>

            </div>
            <ul className="sticket_dichvu">
              <li className="sticket_dichvu_null"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M4.5 12.6111L9.42308 17.5L20.5 6.5" stroke="#259E58" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Tham quan trong ngày</li>
              <li className="sticket_dichvu_null"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M4.5 12.6111L9.42308 17.5L20.5 6.5" stroke="#259E58" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Bao gồm trò chơi</li>
              <li className="sticket_dichvu_null"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M4.5 12.6111L9.42308 17.5L20.5 6.5" stroke="#259E58" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Lối đi riêng</li>
              <li className="sticket_dichvu_none"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M6.5 6L18.5 18M18.5 6L6.5 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Thủy cung</li>
              <li className="sticket_dichvu_none"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M6.5 6L18.5 18M18.5 6L6.5 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Massage cá</li>
              <li className="sticket_dichvu_none"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M6.5 6L18.5 18M18.5 6L6.5 18" stroke="#FF0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>Dịch vụ xe điện</li>
            </ul>
            <ul className="sticket_noidung">
              <li>
                <b style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 700, lineHeight: '150%'}}>Mua từ cổng</b>
                  <p  style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '150%'}}> + 380.000 VNĐ/người (&gt; 1.4m)</p>
                  <p  style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '150%'}}> + 240.000 VNĐ/người (&lt; 1.4m)</p>
              </li>
              <li>
                <b style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 700, lineHeight: '150%'}}>Mua từ cổng Công viên nước:</b>
                
                  <p  style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '150%'}}> + 340.000 VNĐ/người (&gt; 1.4m)</p>
                  <p  style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '150%'}}> + 220.000 VNĐ/người (&lt; 1.4m)</p>
              </li >
              <li>
                <b style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 800, lineHeight: '150%'}}>Mua trong công viên:</b>
               
                  <p  style={{color: 'var(--gray-gray-500, #666)', fontFamily: 'Nunito', fontSize: '16px', fontWeight: 400, lineHeight: '150%'}}> + 280.000 VNĐ/người</p>
              </li>
            </ul>
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
      <Footer />
    </Layout>
  );
};

export default Vekhachle;

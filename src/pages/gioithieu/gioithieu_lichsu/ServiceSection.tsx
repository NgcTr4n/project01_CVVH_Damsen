import React, { useEffect } from 'react';
import './ServiceSection.css';
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { fetchServices } from "../../../features/servicesSlice";

// import dv_trochoi from '../../../assets/dv_trochoi.png'
// import dv_sukien from '../../../assets/dv_sukien.png'
// import dv_canhtri from '../../../assets/dv_canhtri.png'
// import dv_chimthu from '../../../assets/dv_chimthu.png'
// import dv_amthuc from '../../../assets/dv_amthuc.png'

const ServiceSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const { services, loading, error } = useAppSelector((state) => state.services);

  
  useEffect(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  useEffect(() => {
    console.log("Redux State - services: ", services); // Kiểm tra dữ liệu Redux
  }, [services]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  // const services = [
  //   {
  //     title: 'Trò Chơi',
  //     description: 'Lịch sử hình thành CVVH gắn liền với sự phát triển hơn 50 trò chơi. Từ thư giãn đến cảm giác mạnh, phân bổ đều khắp khuôn viên Đầm Sen.',
  //     imageUrl: dv_trochoi,
  //     color: '#259E58',
  //   },
  //   {
  //     title: 'Sự Kiện',
  //     description: 'Là nơi tổ chức nhiều kỷ lục Việt Nam như kỷ lục bánh tét, bánh chưng, bánh Noel… Các sự kiện văn hóa lớn như lễ hội: bắn pháo hoa, Cosplay, khinh khí cầu, xe cổ…',
  //     imageUrl: dv_sukien,
  //     color: '#4293FA',
  //   },
  //   {
  //     title: 'Cảnh Trí',
  //     description: 'Với đủ loại cây xanh, từ bon sai kiểng cổ đến nhiều loài kì hoa dị thảo với các khu vườn xanh mát: Vườn Nam Tú thượng Uyển, Đảo Lan Rừng, Vườn Xương Rồng, Vườn Hoa Châu Âu…',
  //     imageUrl: dv_canhtri,
  //     color: '#E931C3',
  //   },
  //   {
  //     title: 'Chim Thú',
  //     description: 'Hơn 100 chủng loại, bao gồm động vật nuôi trồng, động vật hoang dã và động vật quý hiếm: đười ươi, voi, trăng, cá sấu, đà điểu, hưu sao, giang sen…',
  //     imageUrl: dv_chimthu,
  //     color: '#FFA034',
  //   },
  //   {
  //     title: 'Ẩm Thực',
  //     description: 'Được biết đến với nhà hàng Thủy Tạ, và cà phê Vườn Đá. Chuyên phục vụ các món ăn Hoa – Việt, với đội ngũ đầu Bếp kinh nghiệm lâu năm trong ngành.',
  //     imageUrl: dv_amthuc,
  //     color: '#31C996',
  //   },
  // ];

  return (
    <div className="service-section">
      <h2 className="section-title">NHỮNG LOẠI HÌNH DỊCH VỤ TRỌNG TÂM</h2>
      <div className="service-grid">
      {services && services.length > 0 ? (
  services.map((service, index) => (
    <div className="service-card" key={index}>
      <img src={service.imageUrl} alt={service.title} className="service-image" />
      <h3 className="service-title" style={{ color: service.color }}>
        {service.title}
      </h3>
      <div className="service-line">
        <div className="service-line-center" style={{ backgroundColor: service.color }} />
      </div>
      <p className="service-description">{service.description}</p>
    </div>
  ))
) : (
  <div>No services available</div>
)}

      </div>
    </div>
  );
};

export default ServiceSection;

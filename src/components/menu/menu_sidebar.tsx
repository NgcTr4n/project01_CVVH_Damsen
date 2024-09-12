import React from 'react';
import Menu from './menu';
import Section from './section';
import Sidebar from '../sidebar';
import Layout from '../../layout';
import './menu_sidebar.css'

const MenuSidebar: React.FC = () => {
    const strongFeelings = [
        { id: 1, text: 'Cá Chép Nhào Lộn' },
        { id: 2, text: 'Lâu Đài Kinh Dị' },
        { id: 3, text: 'Phượng Hoàng Bay' },
        // Add other items...
      ];
    
      const virtualInteraction = [
        { id: 14, text: 'Xem Phim Cinemax 8D' },
        { id: 15, text: 'Đua Xe Turbo Racing' },
        // Add other items...
      ];
    
      const entertainment = [
        { id: 19, text: 'Băng Đăng' },
        { id: 20, text: 'Đu Quay Đứng Ferris Wheel' },
        // Add other items...
      ];
    
      const children = [
        { id: 23, text: 'Ếch Nhảy' },
        { id: 24, text: 'Điệu Nhảy Thiên Thần' },
        // Add other items...
      ];
  return (
    <Layout>
       <div className="content_menu">
       <Menu />
    <div className="menu_menu">
      <Section title="CẢM GIÁC MẠNH" items={strongFeelings} />
      <Section title="TƯƠNG TÁC ẢO" items={virtualInteraction} />
      <Section title="GIẢI TRÍ" items={entertainment} />
      <Section title="THIẾU NHI" items={children} />
    </div>
       </div>
    </Layout>
   
  );
};

export default MenuSidebar;

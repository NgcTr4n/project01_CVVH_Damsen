import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./Sidebar.css";
import icon from "../../assets/Icon.png";
import logo from "../../assets/logo.png";

interface NavLink {
  name: string;
  link: string;
  icon?: React.ReactNode;
  subMenu?: NavLink[];
}

const navLinks: NavLink[] = [
  { name: "Trang chủ", link: "/" },
  { name: "Khám phá", link: "/khampha" },
  {
    name: "Giới thiệu",
    link: "/gioithieu",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="16"
        viewBox="0 0 10 16"
        fill="none"
      >
        <path
          d="M2 2L8 8L2 14"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    subMenu: [
      { name: "Lịch sử hình thành", link: "/gioithieu/lichsu" },
      { name: "Thành viên", link: "/gioithieu/thanhvien" },
      { name: "Chính sách bảo mật", link: "/gioithieu/baomat" },
    ],
  },
  {
    name: "Giá vé",
    link: "/vekhachle",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="10"
        height="16"
        viewBox="0 0 10 16"
        fill="none"
      >
        <path
          d="M2 2L8 8L2 14"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    subMenu: [
      { name: "Vé trong công viên", link: "/vekhachle/congvien" },
      { name: "Vé tập thể", link: "/vekhachle/tapthe" },
      { name: "Vé dịch vụ", link: "/vekhachle/dichvu" },
      { name: "Vé tập thể dục", link: "/vekhachle/theduc" },
    ],
  },
  { name: "Sự kiện", link: "/watershow" },
];

const Sidebar = () => {
  const { pathname } = useLocation();
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuClick = (name: string) => {
    setActiveMenu(name);
    setHoveredMenu(null);
  };

  const isActive = (item: NavLink) => {
    return pathname === item.link || activeMenu === item.name;
  };

  return (
    <div className="sidebar">
      <div className="sidebar-content">
        {window.innerWidth >= 600 && (
          <div className="sidebar-title">
            <img src={icon} alt="Icon" />
          </div>
        )}
        <div className="nav-links">
          {navLinks.map((item) => (
            <div
              key={item.name}
              onMouseEnter={() => setHoveredMenu(item.name)}
              onMouseLeave={() => setHoveredMenu(null)}
              className={`nav-item-container ${
                hoveredMenu === item.name || isActive(item) ? "hovered" : ""
              }`}
            >
              <Link
                to={item.link}
                className={`nav-link ${isActive(item) ? "active" : ""}`}
                onClick={() => handleMenuClick(item.name)}
              >
                <div className={`nav-item ${isActive(item) ? "active-item" : ""}`}>
                  {window.innerWidth >= 960 && <p>{item.name}</p>}
                  {item.icon && <span className="nav-icon">{item.icon}</span>}
                </div>
              </Link>
              {item.subMenu && (hoveredMenu === item.name || activeMenu === item.name)  && (
                <div className="sub-menu">
                  {item.subMenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.link}
                      className={`sub-menu-item ${
                        pathname === subItem.link ? "active" : ""
                      }`}
                      onClick={() => setActiveMenu(null)} 
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="sidebar_bottom">
        <Link to="/" className="logo" >
          <img src={logo} alt="Logo" />
        </Link>
        <div className="line"></div>
        <div className="social-icons">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_1_3387)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.562933 2.69513C0 3.77882 0 5.20255 0 8.05V15.95C0 18.7975 0 20.2212 0.562933 21.3049C1.03731 22.2181 1.78191 22.9627 2.69513 23.4371C3.77882 24 5.20255 24 8.05 24L10 24V15.3333H7.00003V12H10V9.33334C10 6.33334 11.9334 4.66667 14.6667 4.66667C15.5334 4.66667 16.4667 4.8 17.3334 4.93334V8H15.8C14.3334 8 14 8.73334 14 9.66667V12H17.2L16.6667 15.3333H14V24L15.95 24C18.7975 24 20.2212 24 21.3049 23.4371C22.2181 22.9627 22.9627 22.2181 23.4371 21.3049C24 20.2212 24 18.7975 24 15.95V8.05C24 5.20255 24 3.77882 23.4371 2.69513C22.9627 1.78191 22.2181 1.03731 21.3049 0.562933C20.2212 0 18.7975 0 15.95 0H8.05C5.20255 0 3.77882 0 2.69513 0.562933C1.78191 1.03731 1.03731 1.78191 0.562933 2.69513Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_3387">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="24"
              viewBox="0 0 34 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M33.2997 3.75529C32.9076 2.28706 31.7593 1.12941 30.303 0.734118C27.6424 0 16.9999 0 16.9999 0C16.9999 0 6.35747 0 3.69685 0.705882C2.26852 1.10118 1.09022 2.25882 0.700073 3.72706C0 6.40941 0 12 0 12C0 12 0 17.5906 0.759294 20.273C1.15137 21.7412 2.29968 22.8988 3.75597 23.2941C6.35747 24 16.9999 24 16.9999 24C16.9999 24 27.6424 24 30.303 23.2941C31.7593 22.8988 32.9076 21.7412 33.2997 20.273C33.9999 17.5906 33.9999 12 33.9999 12C33.9999 12 34.0584 6.43765 33.2997 3.75529ZM13.6283 17.0588V6.94118L22.6242 12L13.6283 17.0588Z"
                fill="white"
              />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clipPath="url(#clip0_1_3394)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.562933 2.69513C0 3.77882 0 5.20255 0 8.05V15.95C0 18.7975 0 20.2212 0.562933 21.3049C1.03731 22.2181 1.78191 22.9627 2.69513 23.4371C3.77882 24 5.20255 24 8.05 24H15.95C18.7975 24 20.2212 24 21.3049 23.4371C22.2181 22.9627 22.9627 22.2181 23.4371 21.3049C24 20.2212 24 18.7975 24 15.95V8.05C24 5.20255 24 3.77882 23.4371 2.69513C22.9627 1.78191 22.2181 1.03731 21.3049 0.562933C20.2212 0 18.7975 0 15.95 0H8.05C5.20255 0 3.77882 0 2.69513 0.562933C1.78191 1.03731 1.03731 1.78191 0.562933 2.69513ZM18.1875 3.99469C18.1875 3.00063 18.9937 2.19531 19.9875 2.19531C20.9813 2.19531 21.7875 3.00094 21.7875 3.99469C21.7875 4.98844 20.9813 5.79469 19.9875 5.79469C18.9937 5.79469 18.1875 4.98844 18.1875 3.99469ZM4.5 12.0005C4.5 7.74643 7.74589 4.50049 12 4.50049C16.2541 4.50049 19.5 7.74643 19.5 12.0005C19.5 16.2546 16.2541 19.5005 12 19.5005C7.74589 19.5005 4.5 16.2546 4.5 12.0005ZM16.5 12.0005C16.5 9.23893 14.7613 7.50049 12 7.50049C9.23841 7.50049 7.5 9.23893 7.5 12.0005C7.5 14.7617 9.23841 16.5005 12 16.5005C14.7613 16.5005 16.5 14.7617 16.5 12.0005Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_3394">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

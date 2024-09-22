import { ReactNode } from "react";
import Sidebar from "../components/sidebar";
import Contract from "../components/contact";

import "./Layout.css";
import Footer from "../components/footer";


interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="layout-container">
            <Sidebar />

            <div className="content">
                {children}
                <Contract />
            </div>
            
        </div>
    );
};

export default Layout;

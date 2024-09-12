import { createBrowserRouter } from "react-router-dom"
import Trangchu from "./pages/trangchu"
import Gioithieu from "./pages/gioithieu"
import Khampha from "./pages/khampha"
import Vekhachle from "./pages/vekhachle"
import Watershow from "./pages/watershow"
import Lichsu from "./pages/gioithieu/gioithieu_lichsu"
import Thanhvien from "./pages/gioithieu/gioithieu_thanhvien"
import Baomat from "./pages/gioithieu/gioithieu_baomat"
import Tapthe from "./pages/vekhachle/tapthe"
import Theduc from "./pages/vekhachle/theduc"
import Dichvu from "./pages/vekhachle/dichvu"
import Congvien from "./pages/vekhachle/congvien"
import Watershow_1 from "./pages/watershow/watershow_1"
import Menu from "./components/menu/menu_sidebar"

export const router = createBrowserRouter([
    {
        path: "/menu",
        element: <Menu />,
    },
    {
        path: "/",
        element: <Trangchu/>,
    },
    {
        path: "/gioithieu",
        element: <Gioithieu/>,
    },
    {
        path: "/khampha",
        element: <Khampha/>,
    },
    {
        path: "/vekhachle",
        element: <Vekhachle/>,
    },
    {
        path: "/watershow",
        element: <Watershow/>,
    },
    {
        path: "/watershow/watershow_1",
        element: <Watershow_1/>,
    },
    {
        path:"/gioithieu/lichsu",
        element: <Lichsu/>,
    },
    {
        path:"/gioithieu/thanhvien",
        element: <Thanhvien/>,
    },
    {
        path:"/gioithieu/baomat",
        element: <Baomat/>,
    },
    {
        path:"/vekhachle/tapthe",
        element: <Tapthe/>,
    },
    {
        path:"/vekhachle/theduc",
        element: <Theduc/>,
    },
    {
        path:"/vekhachle/dichvu",
        element: <Dichvu/>,
    },
    {
        path:"/vekhachle/congvien",
        element: <Congvien/>,
    }
])
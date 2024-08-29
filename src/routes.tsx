import { createBrowserRouter } from "react-router-dom"
import Trangchu from "./pages/trangchu"
import Gioithieu from "./pages/gioithieu"
import Khampha from "./pages/khampha"
import Vekhachle from "./pages/vekhachle"
import Watershow from "./pages/watershow"

export const router = createBrowserRouter([
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
    }
])
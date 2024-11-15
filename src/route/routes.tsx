import {RouteObject} from "react-router-dom";
import HomeLayout from "../layout/HomeLayout.tsx";
import Home from "../pages/home/Home.tsx";
import Detail from "../pages/detail/Detail.tsx";
import NotFound from "../pages/not_found/NotFound.tsx";
import CookingTips from "../pages/cooking_tips/CookingTips.tsx";
import AboutUs from "../pages/about_us/AboutUs.tsx";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/detail/:id",
                element: <Detail/>
            },
            {
                path: "/cooking-tips",
                element: <CookingTips/>
            },
            {
                path: "/about-us",
                element: <AboutUs/>
            }
            ,
            {
                path: "*",
                element: <NotFound/>
            }
        ]
    }
];

export default routes;
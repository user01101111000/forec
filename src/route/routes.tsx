import {RouteObject} from "react-router-dom";
import HomeLayout from "../layout/HomeLayout.tsx";
import Home from "../pages/home/Home.tsx";
import Detail from "../pages/detail/Detail.tsx";
import NotFound from "../pages/not_found/NotFound.tsx";

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
                path: "*",
                element: <NotFound/>
            }
        ]
    }
];

export default routes;
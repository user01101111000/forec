import {FC} from "react";
import {Outlet} from "react-router-dom";
import useTheme from "../hooks/common/useTheme.tsx";
import Navbar from "../components/ui/Navbar.tsx";

const HomeLayout: FC = () => {

    const {theme} = useTheme()


    return <main className="home_layout" data-theme={theme}>
        <Navbar/>
        <Outlet/>
    </main>
}

export default HomeLayout;
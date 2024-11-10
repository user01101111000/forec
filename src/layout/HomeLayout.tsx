import {FC} from "react";
import {Outlet} from "react-router-dom";

const HomeLayout: FC = () => {

    return <main>
        <h1>Layout</h1>
        <Outlet/>
    </main>
}

export default HomeLayout;
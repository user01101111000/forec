import {FC, useState} from "react";
import logo from "../../assets/images/logo.svg";
import {NavLink} from "react-router-dom";
import {LuSearch} from "react-icons/lu";
import {MdOutlineDarkMode} from "react-icons/md";
import {MdOutlineLightMode} from "react-icons/md";
import {RxHamburgerMenu} from "react-icons/rx";
import useTheme from "../../hooks/common/useTheme.tsx";
import {AnimatePresence, motion} from "framer-motion";


const Navbar: FC = () => {

    const [showMenu, setShowMenu] = useState<boolean>(true)
    const {theme, changeTheme} = useTheme()


    return <header className="nav_bar">

        <div className="logo_container">
            <figure>
                <img src={logo} alt="logo"/>
            </figure>

            <h1>Recp</h1>
        </div>


        <AnimatePresence>
            {showMenu &&
                <motion.nav initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} exit={{opacity: 0}}>

                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/recipes"}>Recipes</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                    <NavLink to={"/about-us"}>About us</NavLink>

                    <button>subscribe</button>

                </motion.nav>}
        </AnimatePresence>


        <div className="nav_bar_footer">


            <div className="nav_bar_icon">
                <LuSearch/>
            </div>

            <div className="nav_bar_icon" onClick={() => changeTheme()}>
                {theme == "dark" ? <MdOutlineDarkMode/> : <MdOutlineLightMode/>}
            </div>

            <button>subscribe</button>

            <div className="nav_bar_icon hamburger_menu_icon" onClick={() => setShowMenu(!showMenu)}>
                <RxHamburgerMenu/>
            </div>

        </div>


    </header>


}


export default Navbar;
import {FC, useState} from "react";
import logo from "../../assets/images/logo.svg";
import {NavLink} from "react-router-dom";
import {LuSearch} from "react-icons/lu";
import {MdOutlineDarkMode} from "react-icons/md";
import {MdOutlineLightMode} from "react-icons/md";
import {RxHamburgerMenu} from "react-icons/rx";
import useTheme from "../../hooks/common/useTheme.tsx";
import {IoClose} from "react-icons/io5";
import {AnimatePresence, motion} from "framer-motion";

const nav_lilnks: { title: string, to: string }[] = [{title: "Home", to: "/"}, {title: "Recipes", to: "/recipes"}, {
    title: "Contact",
    to: "/contact"
}, {
    title: "About us",
    to: "/about-us"
}]


const Navbar: FC = () => {

    const [showMenu, setShowMenu] = useState<boolean>(false)
    const {theme, changeTheme} = useTheme()

    const nav_links_components = nav_lilnks.map((link: { title: string, to: string }) =>
        <NavLink key={link.to} to={link.to} onClick={() => setShowMenu((false))}>{link.title}</NavLink>
    )


    return <>
        <header className="nav_bar">

            <div className="logo_container">
                <figure>
                    <img src={logo} alt="logo"/>
                </figure>

            </div>


            <nav className="main_navbar">
                {nav_links_components}
            </nav>


            <div className="nav_bar_footer">


                <div className="nav_bar_icon">
                    <LuSearch/>
                </div>

                <div className="nav_bar_icon" onClick={() => changeTheme()}>
                    {theme == "dark" ? <MdOutlineDarkMode/> : <MdOutlineLightMode/>}
                </div>

                <button>subscribe</button>

                <div className="nav_bar_icon hamburger_menu_icon" onClick={(): void => setShowMenu(!showMenu)}>
                    <RxHamburgerMenu/>
                </div>

            </div>


        </header>


        <AnimatePresence>
            {showMenu &&
                <motion.nav initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="second_navbar">
                    <IoClose className="close_icon" onClick={() => setShowMenu(false)}/>
                    {nav_links_components}
                </motion.nav>}
        </AnimatePresence>
    </>


}


export default Navbar;
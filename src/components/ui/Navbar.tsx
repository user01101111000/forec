import {FC, JSX, useState} from "react";
import logo from "../../assets/images/logo.webp";
import {Location, NavigateFunction, NavLink, useLocation, useNavigate} from "react-router-dom";
import {LuSearch} from "react-icons/lu";
import {MdOutlineDarkMode} from "react-icons/md";
import {MdOutlineLightMode} from "react-icons/md";
import {RxHamburgerMenu} from "react-icons/rx";
import useTheme from "../../hooks/common/useTheme.tsx";
import {IoClose} from "react-icons/io5";
import {AnimatePresence, motion} from "framer-motion";
import SearchBar from "./SearchBar.tsx";
import nav_links from "../../service/const_data/nav_links.ts";


const Navbar: FC = (): JSX.Element => {

    const location: Location = useLocation()
    const navigate: NavigateFunction = useNavigate();
    const [showSearch, setShowSearch] = useState<boolean>(false)
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const {theme, changeTheme} = useTheme()


    const nav_links_components: JSX.Element[] = nav_links.map((link: {
            title: string,
            to: string
        }): JSX.Element =>
            <NavLink key={link.to} to={link.to} onClick={(): void => {
                setShowMenu(false);
                if (location.pathname == link.to) window.scrollTo(0, 0)
            }}>{link.title}</NavLink>
    )


    return <>
        <header className="nav_bar">


            <figure className="logo_fig" onClick={(): void => {
                navigate("/")
            }}>
                <img src={logo} alt="logo"/>
            </figure>


            <nav className="main_navbar">
                {nav_links_components}
            </nav>


            <div className="nav_bar_footer">


                <AnimatePresence>
                    {showSearch ?
                        <SearchBar setShowSearch={setShowSearch}/> :
                        <motion.div initial={{opacity: 0, scale: 0}} animate={{opacity: 1, scale: 1}}
                                    exit={{opacity: 0, scale: 0}}
                                    transition={{duration: 0.5, type: "spring"}} className="nav_bar_icon"
                                    onClick={(): void => {
                                        setShowSearch(true);
                                    }}>
                            <LuSearch/>
                        </motion.div>}
                </AnimatePresence>


                <div className="nav_bar_icon" onClick={(): void => changeTheme()}>
                    {theme == "dark" ? <MdOutlineDarkMode/> : <MdOutlineLightMode/>}
                </div>

                <a href="#subscribe">subscribe</a>

                <div className="nav_bar_icon hamburger_menu_icon" onClick={(): void => setShowMenu(!showMenu)}>
                    <RxHamburgerMenu/>
                </div>

            </div>


        </header>


        <AnimatePresence>
            {showMenu &&
                <motion.nav initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="second_navbar">
                    <IoClose className="close_icon" onClick={(): void => setShowMenu(false)}/>
                    {nav_links_components}
                </motion.nav>}
        </AnimatePresence>
    </>


}


export default Navbar;
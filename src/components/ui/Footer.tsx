import {FC, JSX} from "react";
import logo from "../../assets/images/logo.webp";
import {NavigateFunction, NavLink, useNavigate} from "react-router-dom";
import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

const Footer: FC = (): JSX.Element => {

    const navigate: NavigateFunction = useNavigate();

    return <footer className="footer">


        <div className="footer_header">

            <figure className="logo_fig" onClick={(): void => {
                navigate("/")
            }}>
                <img src={logo} alt="logo"/>
            </figure>


            <nav>

                <NavLink to={"/"}>Home</NavLink>
                <NavLink to={"/cooking-tips"}>Cooking tips</NavLink>
                <NavLink to={"/about-us"}>About us</NavLink>


            </nav>


            <div className="social_media_footer">
                <a href="https://github.com/user01101111000/forec" target="_blank"><FaGithub className="icon"/></a>
                <a href="https://www.linkedin.com/in/elnurguliyev/" target="_blank"><FaLinkedin className="icon"/></a>


            </div>

        </div>

        <hr/>

        <div className="footer_footer">

            <h1>Copyright: © 2024 Forec.</h1>
        </div>


    </footer>
}

export default Footer;
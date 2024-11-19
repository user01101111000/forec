import {FC, JSX} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";

const AboutUsHome: FC = (): JSX.Element => {

    const navigate: NavigateFunction = useNavigate();

    return <section className="about_us_home">

        <div className="about_us_home_content">

            <p>about us</p>
            <h1>Our Culinary Chronicle</h1>
            <h2>Our journey is crafted with dedication, creativity, and an unrelenting commitment to delivering
                delightful culinary experiences. Join us in savoring the essence of every dish and the stories that
                unfold.</h2>

            <button onClick={(): void => {
                navigate("/about-us")
            }}>read more
            </button>

        </div>

        <figure className="img img1">
            <img
                src="https://www.foodandwine.com/thmb/-y8q3-pRxEFMmCdDt5htmuVBVOI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/monkfish-piccata-FT-RECIPE0320-0151068c3b824f878cd6fd578697da90.jpg"
                alt="img1"/>
        </figure>


        <figure className="img img2">
            <img
                src="https://images.unsplash.com/photo-1572715376701-98568319fd0b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNoZWYlMjBjb29rfGVufDB8fDB8fHww"
                alt="img2"/>
        </figure>


        <figure className="img img3">
            <img
                src="https://c1.wallpaperflare.com/preview/345/487/799/kitchen-cook-flame-food.jpg"
                alt="img3"/>
        </figure>


    </section>
}


export default AboutUsHome;
import {FC, JSX} from "react";

const AboutUsHeader: FC = (): JSX.Element => {

    return <section className="about_us_header">

        <div className="about_us_header_title">
            <h1>Welcome to my Culinary Haven!</h1>
        </div>
        <div className="about_us_header_description">
            <h2>Bonjour and welcome to the heart of my kitchen! I'm Isabella Russo, the culinary enthusiast behind this
                haven of flavors, Cooks Delight. Join me on a gastronomic journey where each dish carries a story, and
                every recipe is a crafted symphony of taste.</h2>

            <p>explore recipes</p>
        </div>


    </section>
}

export default AboutUsHeader;
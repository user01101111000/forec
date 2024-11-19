import {FC, JSX} from "react";

const Hero: FC = (): JSX.Element => {

    return <article className="hero">
        <h1>Unleash Culinary Excellence</h1>

        <p>Explore a world of flavors, discover handcrafted recipes, and let the aroma of our passion for cooking fill
            your kitchen</p>

        <a href="#recipes">explore recipes</a>
    </article>
}

export default Hero
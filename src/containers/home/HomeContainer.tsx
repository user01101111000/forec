import {FC, JSX} from "react";
import Hero from "../../components/home/Hero.tsx";
import Explore from "../../components/home/Explore.tsx";
import Featured from "../../components/home/Featured.tsx";
import Recipes from "../../components/home/Recipes.tsx";
import AboutUsHome from "../../components/home/AboutUsHome.tsx";
import Subscribe from "../../components/home/Subscribe.tsx";
import ASection from "../../components/ui/ASection.tsx";

const HomeContainer: FC = (): JSX.Element => {
    return <ASection className={"home"}>
        <Hero/>
        <Explore/>
        <Featured/>
        <Recipes/>
        <AboutUsHome/>
        <Subscribe/>
    </ASection>
}

export default HomeContainer;
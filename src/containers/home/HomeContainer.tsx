import {FC} from "react";
import Hero from "../../components/home/Hero.tsx";
import Explore from "../../components/home/Explore.tsx";
import Featured from "../../components/home/Featured.tsx";

const HomeContainer: FC = () => {
    return <section className="home">
        <Hero/>
        <Explore/>
        <Featured/>
    </section>
}

export default HomeContainer;
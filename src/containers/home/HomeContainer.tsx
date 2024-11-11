import {FC} from "react";
import Hero from "../../components/home/Hero.tsx";
import Explore from "../../components/home/Explore.tsx";
import Featured from "../../components/home/Featured.tsx";
import {motion} from "framer-motion";
import Recipes from "../../components/home/Recipes.tsx";

const HomeContainer: FC = () => {
    return <motion.section initial={{opacity: 0}} animate={{opacity: 1}} className="home">
        <Hero/>
        <Explore/>
        <Featured/>
        <Recipes/>
    </motion.section>
}

export default HomeContainer;
import {FC} from "react";
import {motion} from "framer-motion";
import CookingHero from "../../components/cooking_tips/CookingHero.tsx";
import Featured from "../../components/home/Featured.tsx";

const CookingTipsContainer: FC = () => {
    return <motion.section initial={{opacity: 0}} animate={{opacity: 1}} className="cooking_tips_container">

        <CookingHero/>

        <Featured/>

    </motion.section>
}

export default CookingTipsContainer;
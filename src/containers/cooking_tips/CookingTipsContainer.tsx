import {FC} from "react";
import {motion} from "framer-motion";

const CookingTipsContainer: FC = () => {
    return <motion.section initial={{opacity: 0}} animate={{opacity: 1}} className="cooking_tips_container">Cooking
        tips</motion.section>
}

export default CookingTipsContainer;
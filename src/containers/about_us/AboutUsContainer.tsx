import {FC} from "react";
import {motion} from "framer-motion";

const AboutUsContainer: FC = () => {

    return <motion.section initial={{opacity: 0}} animate={{opacity: 1}} className="about_us_container">About
        us</motion.section>
}

export default AboutUsContainer;
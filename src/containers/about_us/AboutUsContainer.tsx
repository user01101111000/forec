import {FC} from "react";
import {motion} from "framer-motion";
import AboutUsHeader from "../../components/about_us/AboutUsHeader.tsx";
import AboutUsBio from "../../components/about_us/AboutUsBio.tsx";
import Featured from "../../components/home/Featured.tsx";
import Subscribe from "../../components/home/Subscribe.tsx";

const AboutUsContainer: FC = () => {

    return <motion.section initial={{opacity: 0}} animate={{opacity: 1}} className="about_us_container">

        <AboutUsHeader/>

        <AboutUsBio/>

        <Featured/>

        <Subscribe/>

    </motion.section>
}

export default AboutUsContainer;
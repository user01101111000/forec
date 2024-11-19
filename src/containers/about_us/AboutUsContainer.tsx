import {FC, JSX} from "react";
import AboutUsHeader from "../../components/about_us/AboutUsHeader.tsx";
import AboutUsBio from "../../components/about_us/AboutUsBio.tsx";
import Featured from "../../components/home/Featured.tsx";
import Subscribe from "../../components/home/Subscribe.tsx";
import ASection from "../../components/ui/ASection.tsx";

const AboutUsContainer: FC = (): JSX.Element => {

    return <ASection className={"about_us_container"}>
        <AboutUsHeader/>
        <AboutUsBio/>
        <Featured/>
        <Subscribe/>
    </ASection>
}

export default AboutUsContainer;
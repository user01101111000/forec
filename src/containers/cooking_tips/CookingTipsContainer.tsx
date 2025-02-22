import {FC, JSX} from "react";
import CookingHero from "../../components/cooking_tips/CookingHero.tsx";
import Featured from "../../components/home/Featured.tsx";
import CookingBasics from "../../components/cooking_tips/CookingBasics.tsx";
import Subscribe from "../../components/home/Subscribe.tsx";
import ASection from "../../components/ui/ASection.tsx";

const CookingTipsContainer: FC = (): JSX.Element => {
    return <ASection className={"cooking_tips_container"}>
        <CookingHero/>
        <Featured/>
        <CookingBasics/>
        <Subscribe/>
    </ASection>
}

export default CookingTipsContainer;
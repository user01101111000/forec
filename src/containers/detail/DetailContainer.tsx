import {FC, JSX} from "react";
import DetailHeader from "../../components/detail/DetailHeader.tsx";
import DetailInfo from "../../components/detail/DetailInfo.tsx";
import {DetailContainerProps} from "../../types/components/components_types.ts";
import Featured from "../../components/home/Featured.tsx";
import Subscribe from "../../components/home/Subscribe.tsx";
import ASection from "../../components/ui/ASection.tsx";


const DetailContainer: FC<DetailContainerProps> = (props: DetailContainerProps): JSX.Element => {


    return <ASection className={"detail_meal"}>
        <DetailHeader area={props.data?.strArea ?? ""} video={props.data?.strYoutube ?? ""}
                      ingredient_count={props.ingredients.length}
                      title={props.data?.strMeal ?? ""}/>

        <figure className="main_meal_image">
            <img src={props.data?.strMealThumb ?? ""} alt={props.data?.strMeal}/>
        </figure>

        <DetailInfo ingredients={props.ingredients} measures={props.measures}
                    instructions={props.data?.strInstructions ?? ""} youtube={props?.data?.strYoutube ?? ""}/>

        <Featured/>
        <Subscribe/>
    </ASection>
}

export default DetailContainer;
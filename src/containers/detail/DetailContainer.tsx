import {FC} from "react";
import {motion} from "framer-motion";
import DetailHeader from "../../components/detail/DetailHeader.tsx";
import DetailInfo from "../../components/detail/DetailInfo.tsx";
import {DetailContainerProps} from "../../types/components/components_types.ts";
import Featured from "../../components/home/Featured.tsx";
import Subscribe from "../../components/home/Subscribe.tsx";


const DetailContainer: FC<DetailContainerProps> = (props: DetailContainerProps) => {


    return <motion.section initial={{opacity: 0}} animate={{opacity: 1}} className="detail_meal">

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
    </motion.section>
}

export default DetailContainer;
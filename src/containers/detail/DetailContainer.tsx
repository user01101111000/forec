import {FC} from "react";
import {useParams} from "react-router-dom";
import {motion} from "framer-motion";
import useGetMealByID from "../../hooks/service/useGetMealByID.tsx";
import LoadingContainer from "../../components/ui/LoadingContainer.tsx";
import DetailHeader from "../../components/detail/DetailHeader.tsx";


const DetailContainer: FC = () => {

    const {id} = useParams();

    const {data, isLoading, isError, error} = useGetMealByID(parseInt(id as string));


    if (isLoading) return <LoadingContainer/>

    if (isError) return <h1>{error.message}</h1>


    // @ts-ignore
    const ingredients = Array.from({length: 20}, (_, i) => data![`strIngredient${i + 1}`]).filter(Boolean);


    return <motion.section initial={{opacity: 0}} animate={{opacity: 1}} className="detail_meal">

        <DetailHeader area={data?.strArea ?? ""} video={data?.strYoutube ?? ""} ingredient_count={ingredients.length}
                      title={data?.strMeal ?? ""}/>


        <figure className="main_meal_image">
            <img src={data?.strMealThumb ?? ""} alt={data?.strMeal}/>
        </figure>


    </motion.section>
}

export default DetailContainer;
import {FC} from "react";
import {BsArrowLeftCircle} from "react-icons/bs";
import {BsArrowRightCircle} from "react-icons/bs";
import FoodCard from "../ui/FoodCard.tsx";


const Featured: FC = () => {
    return <article className="featured">

        <div className="featured_header">
            <h1>featured recipes</h1>

            <div className="nav_buttons">
                <BsArrowLeftCircle className="arrow_icons"/>
                <BsArrowRightCircle className="arrow_icons"/>
            </div>
        </div>


        <div className="swiper_wrapper">

            <FoodCard/>
            <FoodCard/>
            <FoodCard/>


        </div>

    </article>
}


export default Featured;
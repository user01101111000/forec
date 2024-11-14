import {FC} from "react";
import vegan_icon from "../../assets/icons/vegan_icon.svg";
import {IFoodCardProps} from "../../types/components/components_types.ts";
import {FaCirclePlay} from "react-icons/fa6";
import {IoMdArrowRoundForward} from "react-icons/io";


const RecipeCard: FC<{ data: IFoodCardProps, recipe: boolean }> = (props: {
    data: IFoodCardProps,
    recipe: boolean
}) => {

    return props.recipe ? <div className="recipe_card">

        {props.data.video &&
            <a href={props.data.video} target="_blank" className="video_area"><FaCirclePlay
                className="play_icon"/> Watch
                video</a>}


        <figure className="image_wrapper">
            <img
                src={props.data.image ?? ""}
                alt={props.data.title ?? ""}/>
        </figure>


        <div className="food_card_info">

            {props.data.vegan && <figure className="vegan_icon_wrapper">
                <img src={vegan_icon} alt="vegan_icon"/>
            </figure>
            }

            <div className="food_card_info_header">
                <h1>{props.data.title}</h1>

                <h2>{props.data.description}</h2>
            </div>


            <div className="food_card_info_footer">
                <p>{props.data.area}</p>

                <button>view recipe</button>
            </div>
        </div>


    </div> : <div className="recipe_card_2">

        <figure className="image_wrapper_2">
            <img
                src={props.data.image ?? ""}
                alt={props.data.title ?? ""}/>
        </figure>

        <div className="food_card_info_2">
            <h1>{props.data.title}</h1>

            <button><IoMdArrowRoundForward/>
            </button>
        </div>


    </div>
}


export default RecipeCard;
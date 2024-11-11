import {FC} from "react";
import vegan_icon from "../../assets/icons/vegan_icon.svg";
import {IFoodCardProps} from "../../types/components/components_types.ts";


const RecipeCard: FC<IFoodCardProps> = (props: IFoodCardProps) => {

    return <div className="recipe_card">

        <figure className="image_wrapper">
            <img
                src={props.image}
                alt={props.title}/>
        </figure>


        <div className="food_card_info">

            <figure className="vegan_icon_wrapper">
                <img src={vegan_icon} alt="vegan_icon"/>
            </figure>

            <div className="food_card_info_header">
                <h1>{props.title}</h1>

                <h2>{props.description}</h2>
            </div>


            <div className="food_card_info_footer">
                <p>{props.additional}</p>

                <button>view recipe</button>
            </div>
        </div>


    </div>
}


export default RecipeCard;
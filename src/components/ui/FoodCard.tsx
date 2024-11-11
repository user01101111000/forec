import {FC} from "react";
import vegan_icon from "../../assets/icons/vegan_icon.svg";

const FoodCard: FC = () => {
    return <article className="food_card">

        <figure>
            <img
                src="https://assets.digitalcontent.marksandspencer.app/image/upload/w_640,q_auto,f_auto/MS_FD_F01C_29420636_NC_X_EC_0"
                alt="food"/>
        </figure>


        <div className="food_card_info">

            <figure>
                <img src={vegan_icon} alt="vegan icon"/>
            </figure>

            <div className="food_card_info_header">
                <h1>Savory Herb-Infused Chicken</h1>

                <h2>Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken</h2>
            </div>


            <div className="food_card_info_footer">
                <p>40 Min - easy prep - 3 serves</p>

                <button>view recipe</button>
            </div>
        </div>

    </article>
}

export default FoodCard;
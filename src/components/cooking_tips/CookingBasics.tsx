import {FC, JSX} from "react";
import RecipeCard from "../ui/RecipeCard.tsx";
import {IFoodCardProps} from "../../types/components/components_types.ts";
import cooking_tips_data from "../../service/const_data/cooking_tips.ts";


const CookingBasics: FC = (): JSX.Element => {

    const cooking_basics_elements: JSX.Element[] = cooking_tips_data.map((data: IFoodCardProps): JSX.Element => {
        return <RecipeCard tips={true} recipe={true} key={data.id} data={data} label={"Read More"}/>
    })


    return <section className="cooking_basics">

        <h1>Mastering the Basics</h1>


        <div className="cooking_basics_area">

            {cooking_basics_elements}

        </div>

    </section>
}

export default CookingBasics;
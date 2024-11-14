import {FC} from "react";
import {datas} from "./Slider.tsx";
import {IFoodCardProps} from "../../types/components/components_types.ts";
import RecipeCard from "../ui/RecipeCard.tsx";
import useGetAllCategories from "../../hooks/service/useGetAllCategories.tsx";
import {ICategory} from "../../types/data/data_types.ts";


const Recipes: FC = () => {


    const {data, isLoading, isError, error} = useGetAllCategories();


    if (isLoading) return <h1>Loading</h1>

    if (isError) return <h1>{error.message}</h1>


    const categories: string[] = data!.categories.map((category: ICategory): string => category.strCategory)


    const category_labels = categories.map((category: string, index: number) => <p key={index}
                                                                                   className={`category_label${index === 0 ? " active_category" : ""}`}
                                                                                   onClick={(e) => {

                                                                                       document.querySelectorAll(".category_label").forEach((el: Element) => el.classList.remove("active_category"))
                                                                                       e.currentTarget.classList.add("active_category")

                                                                                   }}>{category}</p>);


    const recipe_cards = datas.map((data: IFoodCardProps, index: number) => <RecipeCard key={index} image={data.image}
                                                                                        title={data.title}
                                                                                        description={data.description}
                                                                                        additional={data.additional}/>)

    return <section className="recipes">

        <div className="recipes_header">

            <div className="recipes_header_title">

                <p className="recipes_header_title_label">recipes</p>
                <h1 className="recipes_header_title_title">Embark on a journey</h1>
                <h2 className="recipes_header_title_description">With our diverse collection of recipes we have
                    something to satisfy every palate.</h2>

            </div>

            <div className="recipes_header_categories">
                {category_labels}

            </div>


        </div>


        <div className="recipes_cards">
            {recipe_cards}

        </div>
    </section>
}


export default Recipes;
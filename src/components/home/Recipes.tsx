import {FC, JSX, useEffect, useState} from "react";
import RecipeCard from "../ui/RecipeCard.tsx";
import useGetAllCategories from "../../hooks/service/useGetAllCategories.tsx";
import {CategoryMeal, ICategory, ICategoryMealResponse} from "../../types/data/data_types.ts";
import useGetMealsByCategory from "../../hooks/service/useGetMealsByCategory.tsx";
import Skeleton from "../ui/Skeleton.tsx";
import LoadingContainer from "../ui/LoadingContainer.tsx";


const Recipes: FC = (): JSX.Element => {

    const skeleton_cards: JSX.Element[] = Array.from({length: 8}, (_: unknown, i: number): JSX.Element => (
        <Skeleton height={"clamp(150px, 40vw, 200px)"} width={"100%"} borderRadius={"32px"} key={i}/>));


    const [loadCount, setLoadCount] = useState<number>(8);
    const [cards, setCards] = useState<ICategoryMealResponse | null>(null);

    const [selectedCategory, setSelectedCategory] = useState<string>("Beef")

    const {mutateAsync, isPending} = useGetMealsByCategory()


    useEffect((): void => {

        mutateAsync(selectedCategory).then((data: ICategoryMealResponse): void => {
            setCards(data);
        })
    }, [selectedCategory])


    const {data, isLoading, isError, error} = useGetAllCategories();


    if (isLoading) return <section className="recipes">
        <LoadingContainer/>
    </section>

    if (isError) return <h1>{error.message}</h1>


    const categories: string[] = data!.categories.map((category: ICategory): string => category.strCategory)


    const category_labels: JSX.Element[] = categories.map((category: string, index: number): JSX.Element => <p
        key={index}
        className={`category_label${index === 0 ? " active_category" : ""}`}
        onClick={(e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
        ): void => {

            document.querySelectorAll(".category_label").forEach((el: Element): void => el.classList.remove("active_category"))
            e.currentTarget.classList.add("active_category")

            setSelectedCategory(category);
            setLoadCount(8)

        }}>{category}</p>);


    const recipe_cards: JSX.Element[] | undefined = cards?.meals.map((meal: CategoryMeal): JSX.Element => <RecipeCard
            key={meal.idMeal}
            data={{
                "image": meal?.strMealThumb,
                "title": meal?.strMeal,
                description: "",
                "vegan": false,
                "video": "",
                area: "",
                id: meal?.idMeal
            }} recipe={false} tips={false}
        />
    ).slice(0, loadCount)

    return <section className="recipes" id="recipes">

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
            {isPending ? skeleton_cards : recipe_cards}

        </div>

        {loadCount < (cards?.meals.length ?? 0) && <button className="load_more_button" onClick={(): void => {

            if (loadCount < cards!.meals.length) setLoadCount(loadCount + 8)

            else setLoadCount(cards!.meals.length)

        }}>Load More
        </button>}
    </section>
}


export default Recipes;
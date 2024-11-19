import {FC, JSX, useEffect, useState} from "react";
import vegan_icon from "../../assets/icons/vegan_icon.svg";
import {IFoodCardProps} from "../../types/components/components_types.ts";
import {FaCirclePlay} from "react-icons/fa6";
import {IoMdArrowRoundForward} from "react-icons/io";
import Skeleton from "./Skeleton.tsx";
import {NavigateFunction, useNavigate} from "react-router-dom";


const RecipeCard: FC<{ data: IFoodCardProps, recipe: boolean, tips: boolean }> = (props: {
    data: IFoodCardProps,
    recipe: boolean,
    tips: boolean,
}): JSX.Element => {

    const navigate: NavigateFunction = useNavigate();

    const [loadImage, setLoadImage] = useState<boolean>(false)


    useEffect((): void => {

        const img = new Image();
        img.src = props.data.image ?? ""


        img.onload = (): void => {
            setLoadImage(true)
        }


    }, [])


    return props.recipe ? <div className="recipe_card" onClick={(): void => {
        if (props.tips) window.open(props.data.link!, "_blank", "noopener,noreferrer");

        else navigate(`/detail/${props.data.id}`)
    }}>

        {props.data.video &&
            <a href={props.data.video} target="_blank" className="video_area"
               onClick={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
                   e.stopPropagation();
               }}><FaCirclePlay
                className="play_icon"/> Watch
                video</a>}


        <figure className="image_wrapper">
            {loadImage ? <img
                src={props.data.image ?? ""}
                alt={props.data.title ?? ""}/> : <Skeleton/>}
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


    </div> : <div className="recipe_card_2" onClick={(): void => {
        navigate(`/detail/${props.data.id}`)
    }}>

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
import {FC} from "react";
import {DetailInfoProps} from "../../types/components/components_types.ts";
import ReactPlayer from 'react-player/youtube'


const DetailInfo: FC<DetailInfoProps> = (props: DetailInfoProps = {
    ingredients: [],
    measures: [],
    instructions: "",
    youtube: ""
}) => {


    console.log(props.ingredients);
    console.log(props.measures);
    console.log(props.instructions)


    const ingredients_items = props.ingredients.map((item: string, index: number) => <li
        key={`${item}${index}`}>{item}</li>)
    const measures_items = props.measures.map((item: string, index: number) => <li key={`${item}${index}`}>{item}</li>)


    return <div className="detail_info">

        <div className="detail_info_instructions">
            <div className="detail_info_instructions_content">
                <h1>Instructions</h1>
                <p>{props.instructions}</p>
            </div>


            <div className="player_wrapper">
                <ReactPlayer className="react_player" controls url={props.youtube}/>
            </div>


        </div>


        <div className="detail_info_ingredients_measures_area">

            <div className="detail_info_ingredients_area detail_info_area">
                <h1>Ingredients</h1>
                <ul>
                    {ingredients_items}
                </ul>
            </div>
            <div className="detail_info_measures_area detail_info_area">
                <h1>Measures</h1>
                <ul>
                    {measures_items}
                </ul>
            </div>


        </div>


    </div>

}

export default DetailInfo;
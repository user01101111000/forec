import {FC, JSX} from "react";
import {DetailHeaderProps} from "../../types/components/components_types.ts";
import {PiBowlFoodBold} from "react-icons/pi";
import {MdLocationOn} from "react-icons/md";
import {FaCirclePlay} from "react-icons/fa6";

const DetailHeader: FC<DetailHeaderProps> = (props: DetailHeaderProps = {
    title: "",
    ingredient_count: 0,
    area: "",
    video: ""
}): JSX.Element => {

    return <section className="detail_header">

        <p>Recipe</p>

        <h1>{props.title}</h1>

        <h2>Welcome to Cooks Delight, where culinary dreams come alive! Today, we embark on a journey of flavors with a
            dish that promises to elevate your dining experience – our Citrus Infusion Delight
            : <span>{props.title}</span>.</h2>


        <div className="detail_header_icons_area">
            <div className="detail_header_icons_area_item">
                <PiBowlFoodBold className="detail_header_icon"/>
                <h3>{props.ingredient_count} Ingredients </h3>
            </div>


            <div className="detail_header_icons_area_item">
                <MdLocationOn className="detail_header_icon"/>
                <h3>{props.area}</h3>
            </div>


            <div className="detail_header_icons_area_item">
                <FaCirclePlay className="detail_header_icon"/>
                <h3>{props.video ? "Video is available" : "Video not available"}</h3>
            </div>

        </div>

    </section>
}

export default DetailHeader;
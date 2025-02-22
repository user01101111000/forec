import {FC, JSX, MutableRefObject} from "react";
import {Swiper, SwiperRef, SwiperSlide} from 'swiper/react';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';
import {Navigation} from "swiper/modules";
import RecipeCard from "../ui/RecipeCard.tsx";
import {Meal} from "../../types/data/data_types.ts";


const Slider: FC<{ swiperRef: MutableRefObject<SwiperRef | null>, meals: Meal[] }> = (props: {
    swiperRef: MutableRefObject<SwiperRef | null>,
    meals: Meal[]
}): JSX.Element => {

    const slides: JSX.Element[] = props.meals.map((data: Meal): JSX.Element => <SwiperSlide
        key={data.idMeal}>

        <RecipeCard data={
            {
                "image": data?.strMealThumb,
                "title": data?.strMeal,
                description: data?.strInstructions,
                "vegan": data.strCategory === "Vegan" || data.strCategory === "Vegetarian",
                "video": data?.strYoutube,
                area: data?.strArea,
                id: data?.idMeal

            }

        } recipe={true} tips={false}/>

    </SwiperSlide>)

    return <Swiper
        ref={props.swiperRef}
        modules={[Navigation]}
        grabCursor
        navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
            300: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            600: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }}
    >
        {slides}
    </Swiper>

}


export default Slider;
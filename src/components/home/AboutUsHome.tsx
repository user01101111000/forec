import {FC} from "react";

const AboutUsHome: FC = () => {
    return <section className="about_us_home">

        <div className="about_us_home_content">

            <p>about us</p>
            <h1>Our Culinary Chronicle</h1>
            <h2>Our journey is crafted with dedication, creativity, and an unrelenting commitment to delivering
                delightful culinary experiences. Join us in savoring the essence of every dish and the stories that
                unfold.</h2>

            <button>read more</button>

        </div>

        <figure className="img img1">
            <img
                src="https://www.foodandwine.com/thmb/-y8q3-pRxEFMmCdDt5htmuVBVOI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/monkfish-piccata-FT-RECIPE0320-0151068c3b824f878cd6fd578697da90.jpg"
                alt="img1"/>
        </figure>


        <figure className="img img2">
            <img
                src="https://media.istockphoto.com/id/1428412216/photo/a-male-chef-pouring-sauce-on-meal.jpg?s=612x612&w=0&k=20&c=8U3mrgWsuB7pB8axtGj89MXRkHDKodEli9F6wKgPT4A="
                alt="img2"/>
        </figure>


        <figure className="img img3">
            <img
                src="https://images.ctfassets.net/pdf29us7flmy/3CrPYGKnMTIY5DbmhrIvos/ae6eebbeced49c8ec47223aeb2e0e493/GettyImages-1062570434-Optimized.jpg?w=720&q=100&fm=jpg"
                alt="img3"/>
        </figure>


    </section>
}


export default AboutUsHome;
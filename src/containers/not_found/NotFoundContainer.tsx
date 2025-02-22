import {FC, JSX} from "react";
import ASection from "../../components/ui/ASection.tsx";
import not_found from "../../assets/images/not_found_food.webp"
import {NavigateFunction, useNavigate} from "react-router-dom";

const NotFoundContainer: FC = (): JSX.Element => {

    const navigate: NavigateFunction = useNavigate();

    return <ASection className="not_found">


        <figure>
            <img src={not_found} alt="not_found"/>
        </figure>


        <div className="not_found_content">
            <h1>There is nothing to eat here.</h1>
            <button onClick={(): void => {
                navigate("/");
            }}>Go Home
            </button>
        </div>


    </ASection>
}

export default NotFoundContainer;
import {FC} from "react";
import loading from "../../assets/gifs/loading.gif"
import {LoadingContainerProps} from "../../types/components/components_types.ts";


const LoadingContainer: FC<LoadingContainerProps> = (props: LoadingContainerProps = {
    heightC: "100%",
    widthC: "100%",
    heightI: "20px",
    widthI: "20px"
}): JSX.Element => {
    return <div className="loading_container" style={{
        height: props.heightC,
        width: props.widthC
    }}>

        <figure style={{height: props.heightI, width: props.widthI}}>
            <img src={loading} alt="loading"/>
        </figure>
    </div>
}

export default LoadingContainer;
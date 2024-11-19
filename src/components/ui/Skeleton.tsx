import {FC} from "react";
import {ISkeletonProps} from "../../types/components/components_types.ts";


const Skeleton: FC<ISkeletonProps> = (props: ISkeletonProps = {
    height: "100%",
    width: "100%",
    borderRadius: "0px",
    gridArea: "auto"
}): JSX.Element => {


    return <div className="skeleton" style={{
        width: props.width,
        height: props.height,
        borderRadius: props.borderRadius,
        gridArea: props.gridArea
    }}></div>
}

export default Skeleton
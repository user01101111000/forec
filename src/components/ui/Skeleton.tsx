import {FC} from "react";
import {ISkeletonProps} from "../../types/components/components_types.ts";
import {motion} from "framer-motion";

const Skeleton: FC<ISkeletonProps> = (props: ISkeletonProps = {
    height: "100%",
    width: "100%",
    borderRadius: "0px",
    gridArea: "auto"
}): JSX.Element => {


    return <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                       transition={{duration: 1, type: "spring"}} className="skeleton" style={{
        width: props.width,
        height: props.height,
        borderRadius: props.borderRadius,
        gridArea: props.gridArea
    }}></motion.div>
}

export default Skeleton
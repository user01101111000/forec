import {FC, JSX, ReactNode} from "react";
import {motion} from "framer-motion";

type ASectionProps = {
    className: string,
    children: ReactNode
}

const ASection: FC<ASectionProps> = (props: ASectionProps): JSX.Element => {
    return <motion.section initial={{opacity: 0}} animate={{opacity: 1}} className={props.className}>
        {props.children}
    </motion.section>
}

export default ASection;
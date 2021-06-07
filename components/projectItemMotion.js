import { motion } from "framer-motion";

export default function ProjectItemMotion({ children, idx, className }) {
    const variants = {
        visible: i => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.3,
                type: "spring",
            },
        }),
        hidden: { y: -20, opacity: 0 }
    }
    return (
        <motion.li
            style={{
                overflow: "hidden",
                backgroundColor: "var(--jet)",
                borderRadius: "0.4rem",
                margin: "5px",
                alignItems: "center",
                position: "relative",
            }}
            className={`${className}`}
            initial="hidden"
            custom={idx}
            animate="visible"
            variants={variants}
        >
            {children}
        </motion.li>
    );
}
import { motion } from "framer-motion";

export default function ProjectItemMotion({ children, idx }) {
    const variants = {
        visible: i => ({
            opacity: 1,
            transition: {
                delay: i * 0.3,
            },
        }),
        hidden: { opacity: 0 },
    }
    return (
        <motion.div
            initial="hidden"
            custom={idx}
            animate="visible"
            variants={variants}
        >
            {children}
        </motion.div>
    );
}
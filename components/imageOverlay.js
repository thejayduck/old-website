import { motion } from 'framer-motion'
import styles from '../styles/components/ImageOverlay.module.css'

export default function ImageOverlay({ data, onClick }) {
    return (
        <motion.div
            className={styles.ImageOverlay}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
            }}
            onClick={onClick}
        >
            <motion.div
                className={styles.content}
                initial={{
                    scale: 0.8,
                    y: -100,
                }}
                animate={{
                    scale: 1,
                    y: 0,
                }}
                exit={{
                    scale: 0.6,
                }}
            >
                <img src={data} />
            </motion.div>
        </motion.div >
    );
}
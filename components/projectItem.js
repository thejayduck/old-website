import styles from '../styles/Projects.module.css';
import AboutHeader from './header';
import { motion } from 'framer-motion';

function cutWord(text) {
    if (text.length > 20)
        return text.substring(0, 20) + "...";
    else
        return text;
}

export default function ProjectItem({ title, description, cover, url, children }) {
    return (
        <motion.li
            initial={{
                y: -20,
                opacity: 0
            }}
            animate={{
                y: 0,
                opacity: 1,
            }}
            transition={{ type: "spring" }}

            className={styles.contentElement}
        >
            {children}
            <div className={styles.content}>
                <img className={styles.cover} src={cover} />
                <div className={styles.contentDetails}>
                    <a className={styles.title} target="_blank" href={url}>
                        {cutWord(title)} <i className="fas fa-link" />
                    </a>
                    {description && <AboutHeader content={description} />}
                </div>
            </div>
        </motion.li>
    );
}
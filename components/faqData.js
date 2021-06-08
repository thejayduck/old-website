import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles/components/FAQ.module.css'
import { Header } from './header.js'

export default function AnimatedFAQ({ data }) {
    return (
        <div>
            <Header title="FAQ" />
            <section>
                <AnimateSharedLayout>
                    <ul className={styles.contentParent}>
                        {
                            data.map((q, idx) =>
                                <FAQItem key={idx} data={q} idx={idx} />
                            )
                        }
                    </ul>
                </AnimateSharedLayout>
            </section>
        </div>
    );
}

function FAQItem({ data, idx }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleItem = () => setIsOpen(!isOpen);

    return (
        <li layout onClick={toggleItem} className={styles.contentElement} id={`question${idx}`}>
            <div className={styles.accordionContainer} >
                <div>
                    <i className="fas fa-question" /> {data.question}
                </div>
                <i className={isOpen ? "fas fa-minus" : "fas fa-plus"}></i>
            </div>
            <AnimatePresence>{isOpen && <FAQAnswer data={data} />}</AnimatePresence>
        </li>
    );
}

function FAQAnswer({ data }) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{
                opacity: 1,
                height: "max-content",
                transition: {
                    type: "spring",
                }
            }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.answer}
        >
            <p>
                {data.answer}
            </p>
        </motion.div>
    );
}
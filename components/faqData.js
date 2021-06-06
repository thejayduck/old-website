import styles from '../styles/components/FAQ.module.css'
import { Header } from './about'

export default function FAQData({ data }) {
    return (
        <div>
            <Header title="FAQ" />
            <section>
                <div className={styles.container}>
                    <ul className={styles.accordion}>
                        {
                            data.map((q, idx) =>
                                <li key={idx} className={styles.accordionItem} id={`question${idx}`}>
                                    <a className={styles.accordionLink} href={`#question${idx}`}>
                                        <div>
                                            <i className="fas fa-question" />{q.question}
                                        </div>
                                        <i className={`${styles.icon} fas fa-plus ${styles.faPlus}`}></i>
                                        <i className={`${styles.icon} fas fa-minus ${styles.faMinus}`}></i>
                                    </a>
                                    <div className={styles.answer}>
                                        <p>
                                            {q.answer}
                                        </p>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </section>
        </div>
    );
}
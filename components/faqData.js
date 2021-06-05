import styles from '../styles/components/FAQ.module.css'

export default function FAQData({ data }) {
    return (
        <div>
            <h1>FAQ</h1>
            <section>
                <div className={styles.container}>
                    <ul className={styles.accordion}>
                        {
                            data.map((q, idx) =>
                                <li key={idx} className={styles.accordionItem} id={`question${idx}`}>
                                    <a className={styles.accordionLink} href={`#question${idx}`}>
                                        Q: {q.question}
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
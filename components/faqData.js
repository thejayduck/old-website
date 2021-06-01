import styles from '../styles/Home.module.css'

export default function FAQData({ data }) {
    return (
        <div>
            <h1>FAQ</h1>
            <section>
                <div className={styles.container}>
                    <div className={styles.accordion}>
                        {
                            data.map((q, idx) =>
                                <div className={styles.accordionItem} id={`question${idx}`}>
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
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </div>
    );
}
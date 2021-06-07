import styles from '../styles/components/GameData.module.css';
import AboutHeader, { Header } from './header';

export default function GameData({ data }) {
    return (
        <div>
            <Header title="Itch.io Projects" icon="fab fa-itch-io" />
            <ul className={styles.contentParent}>
                {
                    data.map(q =>
                        q ? (
                            <li key={q.title} className={styles.contentElement}>
                                <iframe frameBorder="0" src={`https://itch.io/embed/${q.id}?bg_color=2a2928&fg_color=ffffff&link_color=a217d9&border_color=2a2928`}></iframe>
                                <div className={styles.aboutOverlay}>
                                    <h2>
                                        <a target="_blank" href={q.url}>
                                            {q.title} <i className="fas fa-link" />
                                        </a>
                                    </h2>
                                    <AboutHeader content={q.about} />
                                    <div className={styles.genre}>
                                        {q.genre}
                                    </div>
                                </div>

                            </li>
                        ) : <li> Nothing to See Here </li>
                    )
                }
            </ul>
        </div>
    );
}
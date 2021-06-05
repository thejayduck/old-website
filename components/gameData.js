import styles from '../styles/components/GameData.module.css';
import About, { ProjectCategory } from './about';

export default function GameData({ data }) {
    return (
        <div>
            <ProjectCategory title="Itch.io Projects" icon="fab fa-itch-io" />
            <ul className={styles.contentParent}>
                {
                    data.map(q =>
                        q ? (
                            <li key={q.title} className={styles.contentElement}>
                                <iframe frameBorder="0" src={`https://itch.io/embed/${q.id}?bg_color=0a090c&fg_color=ffffff&link_color=a217d9&border_color=43383b`}></iframe>
                                <div className={styles.aboutCover}>
                                    <h2>
                                        <a target="_blank" href={q.url}>
                                            {q.title} <i className="fas fa-link" />
                                        </a>
                                    </h2>
                                    <About content={q.about} />
                                    <div className={styles.gameGenre}>
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
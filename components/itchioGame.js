import styles from '../styles/components/ItchioGame.module.css';
import AboutHeader from './header';
import ProjectItemMotion from './projectItemMotion';

export default function ItchioGame({ data, idx }) {
    return (
        <ProjectItemMotion
            className={styles.contentElement}
            idx={idx}
        >
            <div className={styles.content}>
                <img className={styles.cover} src={data.cover_url} />
                <div className={styles.contentDetails}>
                    <h2>
                        <a className={styles.repoTitle} target="_blank" href={data.url}>
                            {data.title} <i className="fas fa-link" />
                        </a>
                    </h2>
                    {data.short_text && <AboutHeader content={data.short_text} />}
                </div>
            </div>
        </ProjectItemMotion>
    );
}
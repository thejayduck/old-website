import styles from '../styles/components/ItchioData.module.css';
import AboutHeader from './header';

export default function ItchioGame({ data }) {
    return (
        <li className={styles.contentElement}>
            <div styles={styles.content}>
                <img className={styles.cover} src={data.cover_url} />
                <div>
                    <h2>
                        <a className={styles.repoTitle} target="_blank" href={data.url}>
                            {data.title} <i className="fas fa-link" />
                        </a>
                    </h2>
                    <AboutHeader content={data.short_text} />
                </div>
            </div>
        </li>
    );
}
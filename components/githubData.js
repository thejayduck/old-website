import styles from '../styles/components/GithubData.module.css';
import { Header } from './header';
import GithubRepo from './githubRepo';

export default function GithubData({ data }) {

    return (
        <div>
            <Header title="Github Projects" icon="fab fa-github" />
            <div className={styles.contentParent}>
                {
                    data.map(q =>
                        q ? (
                            <GithubRepo key={q.title} data={q.title} image={q.image} />
                        ) : <p> Nothing to See Here </p>
                    )
                }
            </div>
        </div>
    );
}
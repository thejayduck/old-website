import styles from '../styles/GithubData.module.css';
import GithubRepo from './githubRepo';

export default function GithubData({ data }) {

    return (
        <div>
            <h1>Github Projects</h1><hr />
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
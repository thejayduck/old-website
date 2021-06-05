import styles from '../styles/components/GithubData.module.css';
import { ProjectCategory } from './about';
import GithubRepo from './githubRepo';

export default function GithubData({ data }) {

    return (
        <div>
            <ProjectCategory title="Github Projects" icon="fab fa-github" />
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
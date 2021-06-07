import { Header } from "./header";
import styles from '../styles/components/GithubData.module.css';

export default function ProjectList({ renderItem, data, header, icon }) {
    return (
        <div>
            <Header title={header} icon={icon} />
            <ul className={styles.contentParent}>
                {
                    data.map(q =>
                        q ? (
                            renderItem(q)
                        ) : <li> Nothing to See Here </li>
                    )
                }
            </ul>
        </div>
    );
}
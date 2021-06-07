import styles from '../styles/components/ItchioData.module.css';
import { Header } from './header';
import ItchioGame from './itchioGame';

export default function ItchioData({ data }) {
    return (
        <div>
            <Header title="Itch.io Projects" icon="fab fa-itch-io" />
            <ul className={styles.contentParent}>
                {
                    data.filter(q => q.published).reverse().map(q =>
                        q ? (
                            <ItchioGame key={q.id} data={q} />
                        ) : <li> Nothing to See Here </li>
                    )
                }
            </ul>
        </div>
    );
}
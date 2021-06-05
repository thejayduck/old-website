import styles from '../styles/components/About.module.css';

export default function About({ about }) {
    return (
        <div className={styles.about}>
            <h3>About</h3>
            {about}
        </div>
    );
}
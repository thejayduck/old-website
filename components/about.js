import styles from '../styles/components/About.module.css';

export default function About({ about }) {
    return (
        <div className={styles.about}>
            <h3>About</h3>
            <p>{about}</p>
        </div>
    );
}

export function ProjectCategory({ title, icon }) {
    return (
        <div className={styles.category}>
            <h1>{title} <i className={icon} /></h1><br />
        </div>
    );
}
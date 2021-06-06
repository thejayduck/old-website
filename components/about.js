import styles from '../styles/components/About.module.css';

export default function AboutHeader({ content }) {
    return (
        <div className={styles.about}>
            <h3>About</h3>
            <p>{content}</p>
        </div>
    );
}

export function Header({ title, icon }) {
    return (
        <div className={styles.category}>
            <h1>{title} {icon && <i className={icon} />}</h1>
        </div>
    );
}
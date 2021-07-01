import styles from '../styles/components/PageContent.module.css'
import Navbar from '../pages/navbar';

export default function PageContent({ children }) {
    return (
        <>
            <Navbar />
            <main className={styles.pageContent}>
                {children}
            </main>
        </>

    );
}
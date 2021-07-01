import styles from '../styles/Home.module.css'

import FAQData from '../components/faqData'
import PageContent from '../components/pageContent'

export async function getStaticProps() {
    const res = await fetch('https://gist.githubusercontent.com/thejayduck/50a8e7a15ecad2f1b564e51eb1e1e69c/raw')
    const data = await res.json();

    return {
        props: {
            data
        },
        revalidate: 10
    }
}

export default function Home({ data }) {
    return (
        <div>
            <PageContent>
                <h1>I am Arda!</h1>
                <p>
                    And I'm a programmer, an artist, and a university student. In my free time, I draw original characters and create games/apps.
                    <br />
                    You can scroll down further to read FAQ.
                </p>
                <div className={styles.aboutContainer}>
                    <div className={styles.aboutWrap}>
                        <div className={styles.aboutItem}>
                            <h3>Programming Languages</h3>
                            <i title="C#" className={`devicon-csharp-plain ${styles.icon}`} />
                            <i title="Javascript" className={`devicon-javascript-plain ${styles.icon}`} />
                            <i title="Rust" className={`devicon-rust-plain ${styles.icon}`} />
                            <i title="PHP" className={`devicon-php-plain ${styles.icon}`} />
                            {/* <p>C#, PHP, Rust*, JavaScript</p> */}
                        </div>
                        <div className={styles.aboutItem}>
                            <h3>Software</h3>
                            <span>Visual Studio Code <i className="fas fa-code" /></span><br />
                            <span>Infinite Painter <i className="fas fa-paint-brush" /></span><br />
                            <span>Unity Engine <i className="fab fa-unity" /></span>
                        </div>
                        <div className={styles.aboutItem}>
                            <h3>Hardware</h3>
                            <span>Custom Built Desktop <i className="fas fa-desktop" /></span><br />
                            <span>Acer Swift 3 SF314-58G <i className="fas fa-laptop" /></span><br />
                            <span>Samsung Galaxy Tab S6 Lite <i className="fas fa-tablet-alt" /></span>
                        </div>
                    </div>
                    {/* <hr /> */}
                    {/* <footer>* is put for software/language I am still learning</footer> */}
                </div>
                <br />
                <FAQData data={data.faq} />
            </PageContent>
        </div>
    )
}
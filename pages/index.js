import Head from 'next/head'
import FAQData from '../components/faqData'
import styles from '../styles/Home.module.css'
import Navbar from './navbar'

export async function getStaticProps() {
    const res = await fetch('https://gist.githubusercontent.com/thejayduck/50a8e7a15ecad2f1b564e51eb1e1e69c/raw')
    const data = await res.json();

    return {
        revalidate: 10,
        props: {
            data
        }
    }
}

export default function Home({ data }) {
    return (
        <div>
            <Head>
                <title>TheJayDuck - ABOUT</title>
                <meta property="og:description" content="About Page" />
            </Head>
            <Navbar />
            <div className={`${styles.pageContent} pageContent`}>

                <h1>I am Arda!</h1>
                <h3>
                    And I'm a programmer, an artist, and a university student. In my free time, I draw original characters and create games/apps.<br />
            You can scroll down further to read FAQ.
        </h3>
                <div className={styles.toolContainer}>
                    <div className={styles.tool}>
                        <h3>Programming Languages</h3>
                        <p>C#, PHP, Rust*</p>
                    </div>
                    <div className={styles.tool}>
                        <h3>Software</h3>
                        <p>
                            Visual Studio Code<br />
                    MediBang Paint Pro (PC)<br />
                    Infinite Painter (Android)<br />
                    Visual Studio 2019<br />
                    Unity Engine<br />
                    Stride Engine*
                </p>
                    </div>
                    <div className={styles.tool}>
                        <h3>Hardware</h3>
                        <p>
                            Custom Built Desktop<br />
                    Acer Swift 3 SF314-58G<br />
                    Wacom Intuos Draw CTL-490<br />
                    Samsung Galaxy Tab S6 Lite
                </p>
                    </div>
                    <hr />
                    <footer>* is put for software/language I am still learning</footer>
                </div>
                <br />
                <h1>FAQ</h1>
                <FAQData data={data.faq} />
            </div>
        </div>
    )
}
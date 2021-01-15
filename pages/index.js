import Head from 'next/head'
import { getFAQData } from '../data'
import styles from '../styles/Home.module.css'
import Navbar from './navbar'
import { motion } from 'framer-motion'

export default function Home({faq}) {
  return (
    <div>
      <Head>
          <title>TheJayDuck - ABOUT</title>
          <meta property="og:description" content="About Page" />
      </Head>
      <Navbar/>
      <motion.div className={`${styles.pageContent} pageContent`} 
        animate={{ opacity: [0, 1] }}
      >
        <h1>I am Arda!</h1>
        <h3>
            And I'm a programmer, an artist, and a university student. In my free time, I draw original characters and create games/apps.<br/>
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
                    Visual Studio Code<br/>
                    MediBang Paint Pro<br/>
                    Visual Studio 2019<br/>
                    Unity Engine<br/>
                    Stride Engine*
                </p>
            </div>
            <div className={styles.tool}>
                <h3>Hardware</h3>
                <p>
                    Custom Built Desktop<br/>
                    Acer Swift 3 SF314-58G<br/>
                    Wacom Intuos Draw CTL-490
                </p>
            </div>
            <hr/>
            <footer>* is put for software/language I am still learning</footer>
        </div>
        <br/>
        <h1>FAQ</h1>
        <section>
            <div className={styles.container}>
                <div className={styles.accordion}>
                  {
                    faq.map((q, idx) =>
                      <div className={styles.accordionItem} id={`question${idx}`}>
                        <a className={styles.accordionLink} href={`#question${idx}`}>
                            Q: {q.question}
                            <i className={`${styles.icon} fas fa-plus ${styles.faPlus}`}></i>
                            <i className={`${styles.icon} fas fa-minus ${styles.faMinus}`}></i>
                        </a>
                        <div className={styles.answer}>
                            <p>
                              {q.answer}
                            </p>
                        </div>
                      </div>
                    )
                  }
                </div>
            </div>
        </section>
      </motion.div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  return {
      props: {
        faq: getFAQData(),
      }
  }
}
import styles from '../styles/Navbar.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Navbar() {
    let { pathname } = useRouter()

    pathname = pathname.substr(1)
    pathname = pathname === "" ? "index" : pathname

    return (
        <div>
            <style>
                {
                    `            
                    .${styles.topnav} #${pathname} {
                        background-color: rgba(157,0,218);
                        color: white;
                    }
                    `
                }
            </style>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
            <link rel="stylesheet" href="https://icons.coreui.io/css/all.min.04afe194583853dbc897278f1cd35603f76521c9272735b5c39cc8a10f3e6adf.css" />

            <ul className={styles.topnav}>
                <li id="title" className={styles.title}><img src="https://i.ibb.co/kcw3rCd/icon-circle.png"/><Link href="/">TheJayDuck</Link></li>
                <li id="drawings" className={styles.right}><Link href="/drawings">Drawings</Link></li>
                <li id="projects" className={styles.right}><Link href="/projects">Projects</Link></li>
                <li id="index" className={styles.right}><Link href="/">About</Link></li>
                
                <li className={styles.right}>
                    <ul className={styles.social}>
                        <li id="itchio" title="Itch.io Page" className={styles.right}><a href="https://thejayduck.itch.io/" className="fab fa-itch-io" target="_blank"/></li>
                        <li id="twitter" title="Twitter Page" className={styles.right}><a href="https://twitter.com/thejayduck" className="fab fa-twitter" target="_blank"/></li>
                        <li id="deviantart" title="DeviantArt Page" className={styles.right}><a href="https://deviantart.com/thejayduck" className="fab fa-deviantart" target="_blank"/></li>
                        <li id="github" title="Github Page" className={styles.right}><a href="https://github.com/thejayduck" className="fab fa-github" target="_blank"/></li>
                        <li id="mail" title="Contact Mail" className={styles.right}><a href="mailto:ardafevzi.armutcu@gmail.com" className="fa fa-envelope" target="_blank"/></li>
                        {/* <li id="ko-fi" title="Support Me on Ko-fi!" className={styles.right}><a href="https://ko-fi.com/T6T3ILN1" className="cib-ko-fi" target="_blank"/></li> */}
                    </ul>
                </li>

            </ul>
        </div>
    )
}
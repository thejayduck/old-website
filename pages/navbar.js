import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

import { useRouter } from 'next/router'
import { motion } from 'framer-motion';

function LinkItem({ id, title, text, href, icon }) {
    return (
        <motion.a
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}

            id={id}
            title={title}
            href={href}
            className={styles.linkItem}
        >
            <i className={icon} />{text && <span>{text}</span>}
        </motion.a>
    );
}

export default function Navbar() {
    let { pathname } = useRouter()

    pathname = pathname.substr(1)
    pathname = pathname === "" ? "index" : pathname

    return (
        <div className={styles.main}>
            <style>
                {
                    `            
                    .${styles.linkWrap} #${pathname} {
                        background-color: var(--color-Accent);
                        color: white;
                    }
                    `
                }
            </style>

            <div className={styles.headerWrap}>
                <img className={styles.logo} src="/pfp.svg" />
                <span>TheJayDuck</span>
            </div>
            <nav className={styles.linkWrap}>
                <Link href="/drawings" ><a className={styles.linkItem} id="drawings">Drawings</a></Link>
                <Link href="/projects" ><a className={styles.linkItem} id="projects">Projects</a></Link>
                <Link href="/" ><a className={styles.linkItem} id="index">About</a></Link>
                {/* <LinkItem id="drawings" text="Drawings" href="/drawings" /> */}
                {/* <LinkItem id="projects" text="Projects" href="/projects" /> */}
                {/* <LinkItem id="index" text="About" href="/" /> */}
                <div className={styles.socialWrap}>
                    <LinkItem title="Itch.io Page" href="https://thejayduck.itch.io/" icon="fab fa-fw fa-itch-io" />
                    <LinkItem title="Twitter Page" href="https://twitter.com/thejayduck" icon="fab fa-fw fa-twitter" />
                    <LinkItem title="Toyhou.se Page" href="https://toyhou.se/TheJayDuck" icon="fas fa-fw fa-home" />
                    <LinkItem title="Artfol.me Page" href="https://artfol.me/thejayduck" icon="fas fa-fw fa-palette" />
                    <LinkItem title="DeviantArt Page" href="https://deviantart.com/thejayduck" icon="fab fa-fw fa-deviantart" />
                    <LinkItem title="Github Page" href="https://github.com/thejayduck" icon="fab fa-fw fa-github" />
                    <LinkItem title="Contact Mail" href="mailto:ardafevzi.armutcu@gmail.com" icon="fa fa-fw fa-envelope" />
                </div>
            </nav>

        </div>
    )
}
import Head from 'next/head'
import styles from '../styles/Navbar.module.css'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from 'framer-motion';

function SocialLink({ title, href, icon }) {
    const iconVariant = {
        idle: {
            scale: 1
        },
        hover: {
            scale: 1.2
        }
    }

    return (
        <li
            title={title} className={styles.right}
        >
            <motion.a
                initial="idle"
                whileHover="hover"
                animate="idle"

                href={href}
                className={icon}
                target="_blank"
                variants={iconVariant}
            />
        </li >
    );
}

export default function Navbar() {
    let { pathname } = useRouter()

    pathname = pathname.substr(1)
    pathname = pathname === "" ? "index" : pathname

    return (
        <div>

            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            </Head>

            <style>
                {
                    `            
                    .${styles.topnav} #${pathname} {
                        background-color: var(--dark-orchid);
                        color: white;
                    }
                    `
                }
            </style>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
            <link rel="stylesheet" href="https://icons.coreui.io/css/all.min.04afe194583853dbc897278f1cd35603f76521c9272735b5c39cc8a10f3e6adf.css" />

            <ul className={styles.topnav}>
                <li id="title" className={styles.title}><img src="https://i.ibb.co/kcw3rCd/icon-circle.png" /><Link href="/">TheJayDuck</Link></li>
                <li id="drawings" className={styles.right}><Link href="/drawings">Drawings</Link></li>
                <li id="projects" className={styles.right}><Link href="/projects">Projects</Link></li>
                <li id="index" className={styles.right}><Link href="/">About</Link></li>

                <li className={styles.right}>
                    <ul className={styles.social}>
                        <SocialLink title="Itch.io Page" href="https://thejayduck.itch.io/" icon="fab fa-itch-io" />
                        <SocialLink title="Twitter Page" href="https://twitter.com/thejayduck" icon="fab fa-twitter" />
                        <SocialLink title="Toyhou.se Page" href="https://toyhou.se/TheJayDuck" icon="fas fa-home" />
                        <SocialLink title="Artfol.me Page" href="https://artfol.me/thejayduck" icon="fas fa-palette" />
                        <SocialLink title="DeviantArt Page" href="https://deviantart.com/thejayduck" icon="fab fa-deviantart" />
                        <SocialLink title="Github Page" href="https://github.com/thejayduck" icon="fab fa-github" />
                        <SocialLink title="Contact Mail" href="mailto:ardafevzi.armutcu@gmail.com" icon="fa fa-envelope" />
                        {/* <SocialLink title="Support Me on Ko-fi" href="https://ko-fi.com/T6T3ILN1" icon="cib-ko-fi" /> */}
                    </ul>
                </li>

            </ul>
        </div>
    )
}
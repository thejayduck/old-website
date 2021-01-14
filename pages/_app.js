import '../styles/globals.css'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { motion } from 'framer-motion'

export default function MyApp({ Component, pageProps, router }) {

  return (
    <>
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="TheJayDuck's Portfolio" />
        <meta property="og:image" content="/icon_circle_64.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="64" />
        <meta property="og:image:height" content="64" />
      </Head>

      <Component {...pageProps} />

      {/* <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial: {
          opacity: 0
        },
        pageAnimate: {
          opacity: 1
        },
      }}>
        <Component {...pageProps} />
      </motion.div> */}
    </>
  )
}


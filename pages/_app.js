import '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {

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
    </>
  )
}


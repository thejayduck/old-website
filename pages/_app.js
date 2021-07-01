import '../styles/globals.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

        <title>TheJayDuck</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="TheJayDuck's Portfolio" />
        <meta property="og:image" content="/icon_circle_64.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="64" />
        <meta property="og:image:height" content="64" />
        <meta property="og:description" content="TheJayDuck's Personal Page" />
        <meta name="og:site_name" content="TheJayDuck" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}


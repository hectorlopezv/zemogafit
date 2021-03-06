import '../styles/globals.scss'
import Head from 'next/head'
if (process.env.NEXT_PUBLIC_REQUEST_MOCK === 'enabled') {
  require('../testUtils/mswEntry')
}
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="zemoga thumbsup fit" />
        <meta name="og:description" content="zemoga thumbsup fit" />
        <meta property="title" content="zemogafit rule of thumb" />
        <meta property="og:title" content="zemogafit rule of thumb" />
        <meta property="og:type" content="website" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta property="og:image" content="https://pbs.twimg.com/profile_images/1411138632/ZemogaLogo__400x400.png" />
        <title>Zemoga Fit Thumbs</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

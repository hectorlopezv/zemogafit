import '../styles/globals.scss'
import { RecoilRoot } from 'recoil'
import Head from 'next/head'
if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../testUtils/mswEntry')
}
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="zemoga thumbsup fit" />

        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Rule of Thumb</title>
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp

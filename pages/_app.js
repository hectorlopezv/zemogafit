import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../testUtils/mswEntry')
}
function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}

export default MyApp

import '@/src/styles/globals.css'
import '@/src/styles/font.css'
import '@/src/styles/test.css'
import DefaultLayout from '../components/layouts/defaultLayout'

export default function App({ Component, pageProps }) {
  return <DefaultLayout>
    <Component {...pageProps} />
    </DefaultLayout>
}

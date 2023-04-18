import Layout from '../components/Layout'
// styles
import '../styles/index.css'

export default function App({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />      
      </Layout>
  )
}

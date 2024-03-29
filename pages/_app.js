import Layout from '../components/Layout'
import { AuthContextProvider } from '../context/AuthContext'
// styles
import '../styles/index.css'
import 'react-material-symbols/dist/rounded.css'

function MyApp({ Component, pageProps }) {
	return (
		<AuthContextProvider>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</AuthContextProvider>
	)
}

export default MyApp

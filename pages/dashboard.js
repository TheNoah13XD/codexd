import Head from 'next/head'
// firebase
import { useAuth } from '../context/AuthContext';

const dashboard = () => {

    const { user } = useAuth()

    if (user) {
        console.log(user)
    }

    return (
        <>
            <Head>
				<title>.codeXD | Dashboard - An opensource chat-based learning platform.</title>
				<meta name="description" content="A solution for modern education (an opensource text-based learning platform for coding)" />
			</Head>

            <div className="row align-i-center justify-center h-screen">
                <div className="col-10-xs">
                    
                </div>
            </div>
        </>
    );
}
 
export default dashboard;
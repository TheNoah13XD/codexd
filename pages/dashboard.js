import Head from 'next/head'
import { MaterialSymbol } from 'react-material-symbols';
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

            <div className="display-f align-i-center justify-center h-screen">
                <div>
                    <p className='custom-text fw-md display-f align-i-center'><span>Hey</span> <MaterialSymbol icon="waving_hand" size={24} className='ml-1' /> <span className='ml-1'>Noah!</span></p>
                    <p className='custom-text font-xl-2 mt-2'>good morning</p>
                    <p className='custom-text mt-2'>Your Points: 0!</p>
                    <button className='custom-btn br-full mt-3 custom-text'>continue progress</button>
                </div>
            </div>
        </>
    );
}
 
export default dashboard;
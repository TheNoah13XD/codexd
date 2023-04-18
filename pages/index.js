import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<Head>
				<title>.codeXD - An opensource chat-based learning platform.</title>
				<meta name="description" content="A solution for modern education (an opensource text-based learning platform for coding)" />
			</Head>
			<div className='display-f align-i-center justify-center h-screen w-screen'>
				<div className="card black-bg custom-card-bg-gradient p-4 mt-3">
					<p className='custom-text'>Index page</p>
				</div>
			</div>
		</>
	)
}

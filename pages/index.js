import Head from 'next/head'
// icons
import FeatherIcon from 'feather-icons-react';

export default function Home() {
	return (
		<>
			<Head>
				<title>.codeXD - An opensource chat-based learning platform.</title>
				<meta name="description" content="A solution for modern education (an opensource text-based learning platform for coding)" />
			</Head>
			<div className='display-f align-i-center justify-around pl-6 pr-6 h-screen w-screen'>
				<div>
					<div className='display-f'>
						<div className="card white-bg br-full p-2">
							<p className='custom-main fw-md'>.codeXD</p>
						</div>
						<div className="card white-bg br-full p-2 ml-2">
							<p className='custom-main'>Open Source!</p>
						</div>
					</div>
					<div className='display-f mt-2'>
						<div className="card white-bg br-full p-2">
							<p className='custom-main'>Learn coding by texting?</p>
						</div>
						<div className="card white-bg br-full p-2 ml-2">
							<p className='custom-main fw-md'>An AI-powered texting engine for curious learners</p>
						</div>
					</div>
					<p className='custom-text font-xl-3 mt-2'>It's happening!</p>
					<p className='custom-text mt-2 max-w-60p'>Always wanted to learn coding but don't have a proper mentor? codeXD provides solution for the lacking of both human and AI powered teachers to make learning code more easy and fun.</p>
					<div className="display-f">
						<a href="/signup"><button className='custom-btn br-full pt-2 pb-2 mt-2'><span className='custom-text'>Sign up here!</span></button></a>
						<a href="/signin"><button className='emerald-btn br-full pt-2 pb-2 mt-2 ml-2'><span className='custom-text'>Sign In!</span></button></a>
					</div>
				</div>
				<div className='column'>
					<a href="https://github.com/TheNoah13XD/codexd" target='_blank'><div className="card white-bg br-full display-f p-2 justify-center align-i-center">
						<p className='custom-main'><FeatherIcon icon="github" /></p>
					</div></a>
					<a href="https://www.instagram.com/thenoah13_xd/" target='_blank'><div className="card white-bg br-full display-f p-2 justify-center align-i-center mt-2">
						<p className='custom-main'><FeatherIcon icon="instagram" /></p>
					</div></a>
					<a href="https://twitter.com/TheNoah13XD" target='_blank'><div className="card white-bg br-full display-f p-2 justify-center align-i-center mt-2">
						<p className='custom-main'><FeatherIcon icon="twitter" /></p>
					</div></a>
				</div>
			</div>
		</>
	)
}
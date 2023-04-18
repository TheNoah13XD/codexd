import Head from 'next/head'
import Image from 'next/image'

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
							<p className='custom-main'>Lorem</p>
						</div>
						<div className="card white-bg br-full p-2 ml-2">
							<p className='custom-main'>Lorem 22222</p>
						</div>
					</div>
					<div className='display-f mt-2'>
						<div className="card white-bg br-full p-2">
							<p className='custom-main'>Lorem ipsum dolor sit amet.</p>
						</div>
						<div className="card white-bg br-full p-2 ml-2">
							<p className='custom-main'>Lorem, ipsum dolor.</p>
						</div>
					</div>
					<p className='custom-text font-xl mt-2'>It's happening!</p>
					<p className='custom-text mt-2 max-w-60p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ea est dignissimos magni assumenda possimus mollitia necessitatibus qui nobis veritatis. Error, repudiandae. Deleniti quidem id saepe repellat architecto veritatis ea.</p>
					<div className="display-f">
						<a href="/register"><button className='custom-btn br-full pt-2 pb-2 mt-2'><span className='custom-text'>Register now to start coding! Lorem ipsum dolor sit amet.</span></button></a>
						<a href="/login"><button className='emerald-btn br-full pt-2 pb-2 mt-2 ml-2'><span className='custom-text'>Login here!</span></button></a>
					</div>
				</div>
				<div className='column'>
					<div className="card white-bg br-full p-2">
						<p className='custom-main'>One</p>
					</div>
					<div className="card white-bg br-full p-2 mt-2">
						<p className='custom-main'>One</p>
					</div>
					<div className="card white-bg br-full p-2 mt-2">
						<p className='custom-main'>One</p>
					</div>
					<div className="card white-bg br-full p-2 mt-2">
						<p className='custom-main'>One</p>
					</div>
				</div>
			</div>
		</>
	)
}

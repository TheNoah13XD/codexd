import Head from 'next/head'

const register = () => {
    return (
        <>
            <Head>
				<title>.codeXD | Register - An opensource chat-based learning platform.</title>
				<meta name="description" content="A solution for modern education (an opensource text-based learning platform for coding)" />
			</Head>
            <div className="display-f align-i-center justify-center h-screen w-screen container">
                <div className="card custom-card-bg-gradient black-bg br-full p-6">
                    <p className='custom-text font-xl'>Register!</p>
                    <div className='row gap-2'>
                        <div className='col-6-xl'>
                            <form action="" className="mt-2">
                                <input type="text" className="input-t" placeholder="Your Name" />
                                <input type="text" className="input-t mt-2" placeholder="Your Email" />
                                <input type="text" className="input-t mt-2" placeholder="Your Password" />
                            </form>
                        </div>
                        <div className='col-6-xl'>
                            <p className='custom-text font-lg fw-bold'>Some Text!</p>
                            <p className='custom-text mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit voluptate illo aliquid repudiandae quas at aliquam accusantium accusamus atque!</p>
                            <div className="display-f justify-end">
                                <button className='custom-btn br-full pt-2 pb-2 mt-6 justify-end'><span className='custom-text'>Register!</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default register;
import Head from 'next/head'
import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/router';
// firebase
import { useAuth } from '../context/AuthContext';

const Signin = () => {

    const toastRef = useRef();
    const router = useRouter();

    const { signIn } = useAuth()
    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const handleSignin = async (e) => {
        e.preventDefault()

        if(data.email == '' || data.password == '') {
            toastRef.current.className = "toast custom-error-bg";
            toastRef.current.children[0].innerHTML = "Please fill all the fields"
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-error-bg"
            }, 2000)
        } else {
            try {
                await signIn(data.email, data.password)
                router.push('/')
            } catch (err) {
                toastRef.current.className = "toast custom-error-bg";
                toastRef.current.children[0].innerHTML = "Invalid email or password"
                setTimeout(() => {
                    toastRef.current.className = "toast-hidden custom-error-bg"
                }, 2000)
            }
        }
    }

    const { user } = useAuth()

    useEffect(() => {
        if (user) {
          router.push('/dashboard')
        }
    }, [user, router])

    return (
        <>
            <Head>
				<title>.codeXD | SignIn - An opensource chat-based learning platform.</title>
				<meta name="description" content="A solution for modern education (an opensource text-based learning platform for coding)" />
			</Head>

            <div ref={toastRef} className="toast-hidden custom-error-bg">
                <p className='fw-md white'>Error! please check your code</p>
            </div>

            <div className="display-f align-i-center justify-center h-screen w-screen container">
                <div className="card custom-card-bg-gradient black-bg br-full p-6">
                    <p className='custom-text font-xl'>Login!</p>
                    <div className='row gap-2'>
                        <div className='col-6-xl'>
                            <form className="mt-2">
                                <div>
                                    <label className='custom-sub-text fw-md' htmlFor="email">Email</label>
                                    <input type="email" required className="mt-1 input-t" placeholder="Email" 
                                        id='email'
                                        label='email'
                                        value={data.email}
                                        onChange={e => setData({ ...data, email: e.target.value })}
                                    />
                                </div>
                                <div className='mt-2'>
                                    <label className='custom-sub-text fw-md' htmlFor="password">Password</label>
                                    <input type="password" required className="mt-1 input-t" placeholder="Password" 
                                        id='password'
                                        label='password'
                                        value={data.password}
                                        onChange={e => setData({ ...data, password: e.target.value })}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className='col-6-xl'>
                            <p className='custom-text font-lg fw-bold'>Some Text!</p>
                            <p className='custom-text mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit voluptate illo aliquid repudiandae quas at aliquam accusantium accusamus atque!</p>
                            <div className="display-f justify-end mt-4">
                                <button className='custom-btn br-full pt-2 pb-2 mt-2 justify-end' onClick={handleSignin}><span className='custom-text'>Login!</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Signin;
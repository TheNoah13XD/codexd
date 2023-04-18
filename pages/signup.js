import Head from 'next/head'
import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/router';
// firebase
import { useAuth } from '../context/AuthContext';
import { auth, db } from "../firebase/clientApp"
import { doc, setDoc } from 'firebase/firestore';

const Signup = () => {

    const toastRef = useRef();
    const router = useRouter();

    const { signUp } = useAuth()
    const [data, setData] = useState({
        email: '',
        username: '',
        password: ''
    })

    const handleSignup = async (e) => {
        e.preventDefault()

        if (data.email == '' || data.password == '') {
            toastRef.current.className = "toast custom-error-bg";
            toastRef.current.children[0].innerHTML = "Please fill all the fields"
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-error-bg"
            }, 2000)
        } else if(data.email.indexOf('@') == -1 || data.email.indexOf('.') == -1){
            toastRef.current.className = "toast custom-error-bg";
            toastRef.current.children[0].innerHTML = "Please enter a valid email"
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-error-bg"
            }, 2000)
        } else if(data.password.length < 6) {
            toastRef.current.className = "toast custom-error-bg";
            toastRef.current.children[0].innerHTML = "Password must be at least 6 characters"
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-error-bg"
            }, 2000)
        } else {
            try {
                await signUp(data.email, data.password)
                toastRef.current.className = "toast custom-color-bg";
                toastRef.current.children[0].innerHTML = "Account created successfully"
                setTimeout(() => {
                    toastRef.current.className = "toast-hidden custom-color-bg"
                }, 2000)

                // convert date to proper format
                const time = auth.currentUser.metadata.creationTime;
                const convert = new Date(time);
                const dateWithDay = convert.toDateString();
                const dateSplit = dateWithDay.split(" ");
                const month = dateSplit[1];
                const dateNum = dateSplit[2];
                const year = dateSplit[3];
                const dateWithMonthAndYear = `${month} ${dateNum} ${year}`;

                const docRef = setDoc(doc(db, 'users', auth.currentUser.uid), {
                    username: data.username,
                    email: data.email,
                    uid: auth.currentUser.uid,
                    created: dateWithMonthAndYear
                }).catch((error) => {
                    console.log(error)
                })
            } catch (err) {
                console.log(err.message)
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
				<title>.codeXD | Register - An opensource chat-based learning platform.</title>
				<meta name="description" content="A solution for modern education (an opensource text-based learning platform for coding)" />
			</Head>

            <div ref={toastRef} className="toast-hidden custom-error-bg">
                <p className='fw-md white'>Error! please check your code</p>
            </div>

            <div className="display-f align-i-center justify-center h-screen w-screen container">
                <div className="card custom-card-bg-gradient black-bg br-full p-6">
                    <p className='custom-text font-xl'>Register!</p>
                    <div className='row gap-2'>
                        <div className='col-6-xl'>
                            <form action="" className="mt-2">
                                <div>
                                    <label className='custom-sub-text fw-md' htmlFor="email">Username</label>
                                    <input type="email" required className="mt-1 input-t" placeholder="Username" 
                                        id='text'
                                        label='username'
                                        value={data.username}
                                        onChange={e => setData({ ...data, username: e.target.value })}
                                    />
                                </div>
                                <div className='mt-2'>
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
                            <div className="display-f justify-end">
                                <button className='custom-btn br-full pt-2 pb-2 mt-6 justify-end' onClick={handleSignup}><span className='custom-text'>Register!</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Signup;
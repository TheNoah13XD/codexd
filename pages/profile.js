import Head from 'next/head'
import { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/router';
// avatars
import { createAvatar } from '@dicebear/core';
import { lorelei } from '@dicebear/collection';
// firebase
import { collection, doc, onSnapshot, orderBy, query, QuerySnapshot, updateDoc } from "firebase/firestore";
import { db } from '@/firebase/clientApp';
import { useAuth } from '@/context/AuthContext';

const profile = () => {

    const toastRef = useRef();
    const router = useRouter();
    
    const avatar = createAvatar(lorelei, {
        seed: 'John Doe',
    });
    
    const svg = avatar.toString();

    // access firestore
    const [data, setData] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, "users");

        const q = query(collectionRef, orderBy("uid"));

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            setData(QuerySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.number })));
        });
        return unsubscribe;

    }, [])

    // access auth
    const { user } = useAuth()
    const currentUser = data.filter(data => user.uid === data.uid);

    const [profile, setProfile] = useState({
        username: '',
        email: ''
    })

    const handleChanges = (e) => {
        e.preventDefault();

        if (profile.username === '' || profile.email === '') {
            toastRef.current.className = "toast custom-error-bg";
            toastRef.current.children[0].innerHTML = "Please fill all the fields"
            setTimeout(() => {
                toastRef.current.className = "toast-hidden custom-error-bg"
            }, 2000)
        } else {
            const userRef = doc(db, "users", currentUser[0].id);
            updateDoc(userRef, {
                username: profile.username,
                email: profile.email
            });
        }
    }

    useEffect(() => {
        console.log(data)
    }, [data])
    
    return (
        <>
            <Head>
				<title>.codeXD | Profile - An opensource chat-based learning platform.</title>
				<meta name="description" content="A solution for modern education (an opensource text-based learning platform for coding)" />
			</Head>

            <div className="col-10-xs">
                <form action="">
                    <div className="row align-i-center h-screen">
                        <div className="col-2-xs">
                            <div className="avatar-xl">
                                <div dangerouslySetInnerHTML={{ __html: svg }} />;
                            </div>
                        </div>
                        <div className="col-4-xs">
                            <label htmlFor="username" className="custom-text">Username:</label>
                            <input type="text" className='mt-2 input-t' placeholder={currentUser[0].username}
                                id='username'
                                label='username'
                                value={profile.username}
                                onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                            />
                        </div>
                        <div className="col-4-xs ml-4">
                            <label htmlFor="username" className="custom-text">Email:</label>
                            <input type="email" className='mt-2 input-t' placeholder={currentUser[0].email}
                                id='email'
                                label='email'
                                value={profile.email}
                                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                            />
                        </div>
                        <div className="ml-3">
                            <button className='custom-btn br-full custom-text' onClick={handleChanges}>save changes</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
 
export default profile;
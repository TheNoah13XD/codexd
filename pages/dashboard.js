import Head from 'next/head'
import { useState, useRef, useEffect } from "react";
import { MaterialSymbol } from 'react-material-symbols';
// firebase
import { collection, doc, onSnapshot, orderBy, query, QuerySnapshot, updateDoc } from "firebase/firestore";
import { db } from '@/firebase/clientApp';
import { useAuth } from '@/context/AuthContext';

const dashboard = () => {

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

    console.log(currentUser.username)

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
                    <div className="display-f">
                        <p className='custom-text mt-2'>Your Points: 0!</p>
                        <p className='custom-text mt-2 ml-3'>Your Badges: 0!</p>
                    </div>
                    <button className='custom-btn br-full mt-3 custom-text'>continue progress</button>
                </div>
            </div>
        </>
    );
}
 
export default dashboard;
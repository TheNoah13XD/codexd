import { createContext, useContext, useEffect, useState } from 'react'
// firebase
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth'
import { auth, db } from "../firebase/clientApp"
import { addDoc, doc, setDoc } from 'firebase/firestore'
// firebase

const AuthContext = createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email
                })
            } else {
                setUser(null)
            }
            setLoading(false)
        })
    
        return () => unsubscribe()
    }, [])

    const signUp = async (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
        .then( () => {
            const docRef = setDoc(doc(db, 'users', auth.currentUser.uid), {
                'email': email,
                'uid': auth.currentUser.uid,
            }).catch((error) => {
                console.log(error)
            })
        })
    }
    const signIn = async (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = async () => {
        setUser(null)
        await signOut(auth)
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signUp, logout }}>
            {loading ? null : children}
        </AuthContext.Provider>
    )
}

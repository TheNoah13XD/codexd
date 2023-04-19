import { useAuth } from "../context/AuthContext";
import { Router, useRouter } from "next/router";
// icons
import { MaterialSymbol } from 'react-material-symbols';

const Sidebar = () => {

    const { user, logout } = useAuth();
    const router = useRouter()

    return (
        <div className="display-f justify-center h-screen align-i-center">
            <div className="pos-fixed">
                <div className="display-f flex-column">
                    <div>
                        <a href="/dashboard"><MaterialSymbol icon="home" size={32} className='custom-text' /></a>
                    </div>
                    <div className='mt-4'>
                        <a href="/learn"><MaterialSymbol icon="mark_unread_chat_alt" size={32} className='custom-text' /></a>
                    </div>
                    <div className='mt-4'>
                        <a href="/session"><MaterialSymbol icon="forum" size={32} className='custom-text' /></a>
                    </div>
                    <div className='mt-4'>
                        <a href="/profile"><MaterialSymbol icon="person" size={32} className='custom-text' /></a>
                    </div>
                    <div className='mt-4' onClick={() => {
                        logout()
                        router.push('/signin')
                    }}>
                        <MaterialSymbol icon="logout" size={32} className='custom-text pointer' />
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Sidebar;
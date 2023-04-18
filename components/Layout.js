// components
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// router
import { Router, useRouter } from "next/dist/client/router";

const Layout = ({children}) => {

    const router = useRouter();
    const showNav = router.pathname === '/' || router.pathname === '/login' || router.pathname === '/register' ? false : true;
    const showSide = router.pathname === '/' || router.pathname === '/login' || router.pathname === '/register' ? false : true;

    return (
        <>
            {showNav && <Navbar />}
            <div className="display-f">
                {showSide && <Sidebar />}
                <div>
                    { children }
                </div>
            </div>
        </>
    );
}
 
export default Layout;
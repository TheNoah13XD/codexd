// components
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// router
import { Router, useRouter } from "next/dist/client/router";

const Layout = ({children}) => {

    const router = useRouter();
    const showSide = router.pathname === '/' || router.pathname === '/signin' || router.pathname === '/signup' ? false : true;

    return (
        <>
            <div className="row">
                {showSide && <Sidebar />}
                { children }
            </div>
        </>
    );
}
 
export default Layout;
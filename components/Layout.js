// components
import Sidebar from "./Sidebar";
// router
import { Router, useRouter } from "next/dist/client/router";

const Layout = ({children}) => {

    const router = useRouter();
    const showSide = router.pathname === '/' || router.pathname === '/signin' || router.pathname === '/signup' || router.pathname === '/signupTeacher' ? false : true;

    return (
        <>
            <div className="row">
                <div className={ showSide ? "col-2-xs" : "hidden" }>
                    {showSide && <Sidebar />}
                </div>
                <div>
                    { children }
                </div>
            </div>
        </>
    );
}
 
export default Layout;
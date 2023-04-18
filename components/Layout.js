// components
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({children}) => {
    return (
        <>
            <Navbar />
            <div className="display-f gap-5">
                <Sidebar />
                <div>
                    { children }
                </div>
            </div>
        </>
    );
}
 
export default Layout;
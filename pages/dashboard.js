// firebase
import { useAuth } from '../context/AuthContext';

const dashboard = () => {

    const { user } = useAuth()

    if (user) {
        console.log(user)
    }

    return (
        <>
            
        </>
    );
}
 
export default dashboard;
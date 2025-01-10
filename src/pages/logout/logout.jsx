import { useNavigate } from 'react-router';
import { getUserToken, removeSession } from '../../utils/localStorage.utils';

const Logout = ({forceUpdate}) => {
    const navigate = useNavigate();

    const isLogged = !!getUserToken();

    if (!isLogged) {
        return undefined;
    }

    const doLogout = () => {
        removeSession();
        forceUpdate();
        navigate('/');
    }
    

    return (
        <button onClick={doLogout}>Logout</button>
    );

};

export default Logout;
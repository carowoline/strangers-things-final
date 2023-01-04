import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const Signout = ({ signoutTime }) => {
    const history = useHistory();

    localStorage.clear();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            history.push('/home');
        }, 3000);

        return () => clearTimeout(timeoutId);
    }, [signoutTime]);

    return (
        <div>
            <h1>Successfully signed out!</h1>
            <h3>Please wait. Redirecting...</h3>
        </div>
    );
};

export default Signout;
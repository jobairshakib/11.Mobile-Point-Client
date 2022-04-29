import React from 'react';
import './Social.css';
import google from '../../images/google.png';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import auth from '../../firebase.init';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
    }
    if (loading) {
        return <Spinner animation="border" variant="danger" />;
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className="bg-success w-50"></div>
                <p className='mt-3 mx-3'>Or</p>
                <div style={{ height: '1px' }} className="bg-success w-50"></div>
            </div>
            {errorElement}
            <div>
                <button className='social-btn' onClick={() => signInWithGoogle()}>
                    <img src={google} alt="" /><span className='px-2'> Google Sign In</span></button>
            </div>
        </div>
    );
};

export default Social;
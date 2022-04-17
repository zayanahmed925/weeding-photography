import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();
    let errorElement;
    if (error || error1) {
        errorElement =
            <div style={{ color: 'red' }}>
                <p>Error: {error?.message} {error1?.message}</p>
            </div>
    }
    let from = location.state?.from?.pathname || "/";
    if (user || user1) {
        navigate(from, { replace: true });
    }
    return (
        <div className=''>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50 '></div>
                <div className='mx-3'>OR</div>
                <div style={{ height: '1px' }} className='bg-secondary w-50 '></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='btn btn-secondary my-3 py-2 w-50 d-block mx-auto'>Googgle Sign in</button>
            <button onClick={() => signInWithGithub()} className='btn btn-dark py-2  w-50 d-block mx-auto'>Github Sign in</button>
        </div>
    );
};

export default SocialLogin;
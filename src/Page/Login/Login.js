import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';
import SocialLogin from './SocialLogin/SocialLogin';
const Login = () => {
    const emailRef = useRef('')
    const PasswordRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    let errorElement;
    if (error) {
        errorElement =
            <div style={{ color: 'red' }}>
                <p>Error: {error?.message}</p>
            </div>

    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = PasswordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const handleRegister = () => {
        navigate('/register')
    }
    const handleReset = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please Enter Your email');
        }
    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className=' text-center mt-3 title'>Please login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" ref={emailRef} placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={PasswordRef} placeholder="Password" required />
                </Form.Group>
                {errorElement}
                <Button className='px-5 login-btn' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='my-3'>New to Captured Moments? <Link to='/register' className='text-primary text-decoration-none ' onClick={handleRegister}>Please Register</Link></p>
            <p>Forget Password  <a style={{ cursor: 'pointer' }} onClick={handleReset} className='text-primary text-decoration-none pe-auto '>Reset Password</a></p>

            <SocialLogin></SocialLogin>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;
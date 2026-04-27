import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
    const [currentState, setCurrentState] = useState('Login');
    const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            if (currentState === 'Sign Up') {
                const response = await axios.post(backendUrl + '/api/auth/register', { name, email, password });
                if (response.data.success) {
                    setToken(response.data.token);
                    localStorage.setItem('token', response.data.token);
                } else {
                    toast.error(response.data.message);
                }
            } else {
                const response = await axios.post(backendUrl + '/api/auth/login', { email, password });
                if (response.data.success) {
                    setToken(response.data.token);
                    localStorage.setItem('token', response.data.token);
                } else {
                    toast.error(response.data.message);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token]);

    return (
        <form onSubmit={onSubmitHandler} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90%', sm: {maxWidth: '400px'}, margin: 'auto', marginTop: '56px', gap: '16px', color: '#414141' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '40px' }}>
                <p style={{ fontFamily: 'Prata', fontSize: '1.875rem' }}>{currentState}</p>
                <hr style={{ border: 'none', height: '1.5px', width: '32px', backgroundColor: '#414141' }} />
            </div>
            {currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type="text" style={{ width: '100%', padding: '8px 16px', border: '1px solid #414141' }} placeholder='Name' required />}
            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" style={{ width: '100%', padding: '8px 16px', border: '1px solid #414141' }} placeholder='Email' required />
            <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" style={{ width: '100%', padding: '8px 16px', border: '1px solid #414141' }} placeholder='Password' required />
            <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginTop: '-8px' }}>
                <p style={{ cursor: 'pointer' }}>Forgot your password?</p>
                {currentState === 'Login'
                    ? <p onClick={() => setCurrentState('Sign Up')} style={{ cursor: 'pointer' }}>Create account</p>
                    : <p onClick={() => setCurrentState('Login')} style={{ cursor: 'pointer' }}>Login Here</p>
                }
            </div>
            <button style={{ backgroundColor: '#1a1a1a', color: 'white', fontWeight: '300', padding: '8px 32px', marginTop: '16px' }}>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
        </form>
    );
};

export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = async () => {
        const loginData = { email, password };
        try {
            const res = await axios.post('https://log-in-server.onrender.com/api/user/login', loginData);
            localStorage.setItem('token', res.data.token);
            props.setLoggedIn(true);  
            console.log(res);
        } catch(err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <br/>
            <button className='glass loginBtn' onClick={login}>Login</button>
        </div>
    );
};

export default Login;

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const Register = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const register = async () => {
        try {
            const res = await axios.post('https://log-in-server.onrender.com/api/user/register', { email, username, password });
            console.log(res.data);
        } catch(err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <br/>
            <button className='glass loginBtn' onClick={register}>Register</button>
        </div>
    );
};

export default Register;

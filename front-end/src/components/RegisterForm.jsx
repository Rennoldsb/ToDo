import React, { useState } from 'react';
import axios from 'axios';
import './RegisterForm.css';

const RegisterForm = () => {
  const [registerUsername, setRegisterUserName] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [errorData, setErrorData] = useState('');

  const register = () => {
    axios({
      method: 'post',
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: 'http://localhost:4000/register',
    }).catch((e) => setErrorData(e.response.data));
  };

  return (
    <div className='text-center vert-middle'>
      <h1>Register</h1>
      <input
        placeholder='username'
        onChange={(e) => setRegisterUserName(e.target.value)}
      />
      <input
        placeholder='password'
        onChange={(e) => setRegisterPassword(e.target.value)}
        type='password'
      />
      <button onClick={register}>Register!</button>
      <p>{errorData ? errorData : ''}</p>
    </div>
  );
};

export default RegisterForm;

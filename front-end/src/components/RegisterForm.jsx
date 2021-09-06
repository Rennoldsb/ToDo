import React, { useState } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Register</h1>
      <input
        placeholder='username'
        onChange={(e) => setRegisterUserName(e.target.value)}
      />
      <p>{errorData ? errorData : ''}</p>
      <input
        placeholder='password'
        onChange={(e) => setRegisterPassword(e.target.value)}
      />
      <button onClick={register}>Register!</button>
    </div>
  );
};

export default RegisterForm;

import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [loginUsername, setLoginName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errorData, setErrorData] = useState('');

  const login = () => {
    axios({
      method: 'post',
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: 'http://localhost:4000/login',
    }).catch((e) => setErrorData(e.response.data));
  };

  const testGetUser = async () => {
    const getUser = await axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:4000/user',
    });
    console.log(getUser);
  };

  return (
    <div>
      <h1>LogIn</h1>
      <input
        placeholder='username'
        onChange={(e) => setLoginName(e.target.value)}
      />
      <p>{errorData ? errorData : ''}</p>
      <input
        placeholder='password'
        onChange={(e) => setLoginPassword(e.target.value)}
      />
      <button onClick={login}>Register!</button>
      <button onClick={testGetUser}>Test Get User</button>
    </div>
  );
};

export default LoginForm;

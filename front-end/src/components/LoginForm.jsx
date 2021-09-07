import React, { useState } from 'react';
import axios from 'axios';
import Form from './Form';

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
    <React.Fragment>
      <h1 className='title'> Login </h1>
      <Form
        f1={setLoginName}
        f2={setLoginPassword}
        runOnClick={login}
        errorData={errorData}
      />
    </React.Fragment>
  );
};

export default LoginForm;

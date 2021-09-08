import React, { useState } from 'react';
import axios from 'axios';
import Form from './Form';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const [loginUsername, setLoginName] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [errorData, setErrorData] = useState('');
  let history = useHistory();

  const login = () => {
    axios({
      method: 'post',
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: 'http://localhost:4000/login',
    })
      .then((res) =>
        res.status === 200 ? history.push('/todo') : console.log('error')
      )
      .catch((e) => setErrorData(e.response.data));
  };

  return (
    <React.Fragment>
      <h1 className='title'> Login </h1>
      <Form
        f1={setLoginName}
        f2={setLoginPassword}
        runOnClick={login}
        errorData={errorData}
        name='Login'
      />
    </React.Fragment>
  );
};

export default LoginForm;

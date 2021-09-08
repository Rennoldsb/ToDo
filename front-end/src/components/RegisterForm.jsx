import React, { useState } from 'react';
import axios from 'axios';
import Form from './Form';
import { useHistory } from 'react-router-dom';
import { ActionCreators } from '../state';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

const RegisterForm = () => {
  const [registerUsername, setRegisterUserName] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [errorData, setErrorData] = useState('');
  const dispatch = useDispatch();
  const { authUser } = bindActionCreators(ActionCreators, dispatch);
  let history = useHistory();

  const register = () => {
    axios({
      method: 'post',
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: 'http://localhost:4000/register',
    })
      .then((res) => {
        authUser({
          isAuthenticated: true,
          user: res.data,
        });
        res.status === 200 ? history.push('/todo') : console.log('error');
      })
      .catch((e) => setErrorData(e.response.data));
  };

  return (
    <React.Fragment>
      <h1 className='title'> Register </h1>
      <Form
        f1={setRegisterUserName}
        f2={setRegisterPassword}
        runOnClick={register}
        errorData={errorData}
        name='Register!'
      />
    </React.Fragment>
  );
};

export default RegisterForm;

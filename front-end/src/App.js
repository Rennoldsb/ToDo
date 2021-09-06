import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';

const App = () => {
  return (
    <Router>
      <div>
        <nav class='navbar navbar-dark bg-dark'>
          <ul class='nav justify-content-end'>
            <li className='nav-item'>
              <Link to='/login'>
                <button tabIndex='-1'>User Login</button>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/register'> User Register </Link>
            </li>
          </ul>
        </nav>

        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={RegisterForm} />
      </div>
    </Router>
  );
};

export default App;

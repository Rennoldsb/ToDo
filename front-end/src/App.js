import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import ToDoPage from './views/ToDoPage';
import LogOut from './components/LogOut';
import { useSelector } from 'react-redux';

const App = () => {
  const state = useSelector((state) => state);

  return (
    <Router>
      <div>
        <header class='navbar'>
          <section class='navbar-section'>
            {state.auth.isAuthenticated ? <LogOut /> : null}
          </section>
          <section class='navbar-center'>
            {state.auth.isAuthenticated ? (
              <a href='/todo' className='btn btn-link'>
                Your Todo's
              </a>
            ) : null}
          </section>
          <section class='navbar-section'>
            <a href='/login' class='btn btn-link'>
              Login
            </a>
            <a href='/register' class='btn btn-link'>
              Register
            </a>
          </section>
        </header>
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={RegisterForm} />
        <Route path='/todo' component={ToDoPage} />
      </div>
    </Router>
  );
};

export default App;

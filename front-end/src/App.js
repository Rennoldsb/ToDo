import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import ToDoPage from './views/ToDoPage';

const App = () => {
  return (
    <Router>
      <div>
        <header class='navbar'>
          <section class='navbar-section'></section>
          <section class='navbar-center'>
            <a href='/todo' className='btn btn-link'>
              Your Todo's
            </a>
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

import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Home } from './HomeComponent';
import { Login } from './LoginComponent';
import exercise from '../img/exercise.jpg';

export function Main() {
  const [user, setUser] = useState(null);

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuth = (boolean: any) => {
    setIsAuthenticated(boolean);
  };

  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route
            exact
            path='/'
            render={(props) =>
              !isAuthenticated ? (
                <Login {...setAuth} />
              ) : (
                <Redirect to='/home' />
              )
            }
          />
          <Route
            exact
            path='/home'
            render={(props) =>
              isAuthenticated ? (
                <Home {...setAuth} {...props} />
              ) : (
                <Redirect to='/' />
              )
            }
          />
        </Switch>
      </div>
      <img src={exercise} alt='exercise' className='exercise-img' />
    </Router>
  );
}

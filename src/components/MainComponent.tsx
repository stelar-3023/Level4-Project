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

  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          render={(props) =>
            !isAuthenticated ? <Login /> : <Redirect to='/home' />
          }
        />
        <Route
          exact
          path='/home'
          render={(props) =>
            isAuthenticated ? <Home {...props} /> : <Redirect to='/' />
          }
        />
      </Switch>
      {/* {user ? <Home user={setUser} /> : <Login />} */}
      <img
        src={exercise}
        alt='exercise'
        className='exercise-img'
        style={{
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          height: 'auto',
          maxWidth: '100%',
          opacity: '0.4',
        }}
      />
    </Router>
  );
}

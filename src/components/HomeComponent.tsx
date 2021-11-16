import { Fragment, useState, useEffect } from 'react';
import { Jumbotron, Nav, NavItem, Navbar } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { AccountModal } from './AccountDetailsModal';
import { WorkoutModal } from './LogWorkoutModal';
import { LogModal } from './LogModal';
import { toast } from 'react-toastify';


export function Home(props: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  // handleLogout goes here
  const handleLogout = async (e: any) => {
    e.preventDefault();
    try {
      localStorage.removeItem('token');
      props.setAuth(false);
      toast.success('Logged out successfully');
    } catch (error) {
      let errorMessage = 'Server Error';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      toast.error(errorMessage);
    }
  };
  console.log(email);

  const accountDetails = async () => {
    try {
      const response = await fetch('http://localhost:5000/profile/', {
        method: 'POST',
        headers: { jwt_token: localStorage.token },
      });
      // console.log(response)
      const parseRes = await response.json();
      console.log(parseRes);
      setName(parseRes.user_name); 
      // console.log(name)
      setEmail(parseRes.user_email); 
      // console.log(email)
    } catch (error) {
      let errorMessage = 'Server error';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.error(errorMessage);
    }
  };

  useEffect(() => {
    accountDetails();
  });

  return (
    <Fragment>
      <Jumbotron fluid>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h1 data-text='header'>Spartan Calisthenics</h1>
              <h2>A better way to train.</h2>
            </div>
          </div>
        </div>
      </Jumbotron>
      <Navbar dark sticky='top' expand='sm'>
        <div className='container'>
          <Nav navbar style={{ marginRight: 'auto' }}>
            <NavItem>
              <AccountModal
                name={name}
                email={email}
                renderAccount={(toggleAccount: any) => (
                  <NavLink
                    onClick={toggleAccount}
                    className='nav-link logged-in'
                    data-target='modal-account'
                    to='#'
                  >
                    Account
                  </NavLink>
                )}
              />
            </NavItem>
            <NavItem>
              <WorkoutModal
                email={email}
                renderWorkout={(toggleWorkout: any) => (
                  <NavLink
                    onClick={toggleWorkout}
                    className='nav-link logged-in'
                    data-target='modal-exercise'
                    to='#'
                  >
                    Log Workout
                  </NavLink>
                )}
              />
            </NavItem>
            <NavItem>
              <LogModal
                email={email}
                renderLog={(toggleLog: any) => (
                  <NavLink
                    onClick={toggleLog}
                    className='nav-link logged-in'
                    to='#'
                    data-target='modal-log'
                  >
                    Log
                  </NavLink>
                )}
              />
            </NavItem>
            <NavItem>
              <NavLink
                onClick={(e) => handleLogout(e)}
                className='nav-link logged-in'
                to='#'
              >
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </Fragment>
  );
}

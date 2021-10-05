import { Fragment } from 'react';
import { Jumbotron, Nav, NavItem, Navbar } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { AccountModal } from './AccountDetailsModal';
import { WorkoutModal } from './LogWorkoutModal';
import { LogModal } from './LogModal';

export function Home(props: any) {
  // handleLogout goes here
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
                user={props.user}
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
                user={props.user}
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
            {/* <NavItem>
              <LogModal
                user={props.user}
                renderLog={(toggleLog: any) => (
                  <NavLink
                    onClick={toggleLog}
                    className="nav-link logged-in"
                    to="#"
                    data-target="modal-log"
                  >
                    Log
                  </NavLink>
                )}
              />
            </NavItem> */}
          </Nav>
        </div>
      </Navbar>
    </Fragment>
  );
}

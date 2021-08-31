import React from "react";
import { Jumbotron, Nav, NavItem, Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";
import { AccountModal } from "./AccountDetailsModal";
// import WorkoutModal from "./LogWorkoutModal";
// import LogModal from "./LogModal";

export function Home() {
  // handleLogout goes here
  return (
    <React.Fragment>
      <Jumbotron fluid>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Spartan Calisthenics</h1>
              <h2> A better way to train.</h2>
            </div>
          </div>
        </div>
      </Jumbotron>
      <Navbar>
        <div className="container">
          <Nav navbar style={{ marginRight: "auto" }}>
            <NavItem>
                <AccountModal/>
            </NavItem>
            <NavItem>{/* WorkoutModal goes here */}</NavItem>
            <NavItem>{/* LogModal goes here */}</NavItem>
            <NavLink className="nav-link logged-in" to="#">
              Logout
            </NavLink>
          </Nav>
        </div>
      </Navbar>
    </React.Fragment>
  );
}

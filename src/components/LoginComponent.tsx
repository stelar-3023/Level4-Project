import React from "react";
import { Jumbotron, Nav, NavItem, Navbar } from "reactstrap";
// import { NavLink } from "react-router-dom";

export function Login() {
  return (
    <React.Fragment>
      <Jumbotron fluid>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Spartan Calisthenics</h1>
              <h2>A better way to train.</h2>
            </div>
          </div>
        </div>
      </Jumbotron>
      <Navbar dark sticky="top" expand="md">
        <div className="container">
          <Nav
            navbar
            style={{
              marginRight: "auto",
            }}
          >
            <NavItem>
              {/* Login Modal goes here */}
            </NavItem>
            <NavItem>
              {/* Signup Modal goes here */}
            </NavItem>
          </Nav>
        </div>
      </Navbar>
    </React.Fragment>
  );
}



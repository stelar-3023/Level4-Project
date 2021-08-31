import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./HomeComponent";
import { Login } from "./LoginComponent";
import exercise from "../img/exercise.jpg";

export function Main() {
  return (
    <Router>
      {<Home />}
      <img src={exercise} alt="exercise" className="exercise-img" />
    </Router>
  );
}

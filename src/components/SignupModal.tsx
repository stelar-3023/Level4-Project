import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
} from "reactstrap";

export default function SignupModal() {
    const [isSignupOpen, setIsSignupOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [exercise, setExercise] = useState("");
    const [reps, setReps] = useState(0);

    function toggleSignup() {
        setIsSignupOpen(!isSignupOpen);
    }
}


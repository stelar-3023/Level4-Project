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

export function SignupModal(props: any) {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  // const [exercise, setExercise] = useState("");
  // const [weight, setWeight] = useState(0);
  // const [reps, setReps] = useState(0);

  const toggleSignup = () => {
    setIsSignupOpen(!isSignupOpen);
  };
  return (
    <React.Fragment>
      {props.renderSignup(toggleSignup)}
      <Modal
        id="modal-signup"
        className="modal"
        centered={true}
        toggle={toggleSignup}
      >
        <ModalBody className="modal-content">
          <h4>Sign up</h4>
          <br />
          <Form id="signup-form">
            <FormGroup className="input-field">
              <Label for="signup-email">Email Address</Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                data-testid="signup-email"
                autoComplete="on"
                id="signup-email"
                placeholder="Enter email"
                required
              />
            </FormGroup>
            <FormGroup className="input-field">
              <Label for="sign-up-password">Choose Password</Label>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="signup-password"
                placeholder="password"
                required
              />
            </FormGroup>
            <FormGroup className="input-field">
              <Label for="signup-username">Choose username</Label>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                name="username"
                autoComplete="on"
                id="signup-username"
                placeholder="username"
                required
              />
              <br />
              <Button type="submit" /*onClick={}*/ color="danger" size="sm">Submit</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

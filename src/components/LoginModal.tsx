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

export function LoginModal() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function toggleLogin() {
    setIsLoginOpen(!isLoginOpen);
  }

  return (
    <React.Fragment>
      <Modal>
        <ModalBody className="modal-content">
          <h4>Login</h4>
          <br />
          <Form id="login-form">
            <FormGroup className="input-field">
              <Label for="login-email">Email Address</Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                data-testId="email-input"
                autoComplete="on"
                id="login-email"
                placeholder="email"
                required
              />
            </FormGroup>
            <FormGroup className="input-field">
              <Label for="login-password">Your Password</Label>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                autoComplete="off"
                id="login-password"
                placeholder="password"
                required
              />
              <br />
              <Button type="submit" color="danger" size="sm">Login</Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

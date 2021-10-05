import { Fragment, useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalBody,
} from 'reactstrap';

export function LoginModal(props: any) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return (
    <Fragment>
      {props.renderLogin(toggleLogin)}
      <Modal
        id='modal-login'
        className='modal'
        isOpen={isLoginOpen}
        centered={true}
        toggle={toggleLogin}
      >
        <ModalBody className='modal-content'>
          <h4>Login</h4>
          <br />
          <Form id='login-form'>
            <FormGroup className='input-field'>
              <Label for='login-email'>Email Address</Label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                name='email'
                data-testId='email-input'
                autoComplete='on'
                id='login-email'
                placeholder='email'
                required
              />
            </FormGroup>
            <FormGroup className='input-field'>
              <Label for='login-password'>Your Password</Label>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type='password'
                name='password'
                autoComplete='off'
                id='login-password'
                placeholder='password'
                required
              />
              <br />
              <Button type='submit' /*onClick={}*/ color='danger' size='sm'>
                Login
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
}

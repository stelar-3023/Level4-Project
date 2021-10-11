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
// import { createPortal } from 'react-dom';

export function LoginModal(props: any, { setAuth }: any) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = inputs;

  const handleChange = (e: any) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  // const modalRoot = document.getElementById('modal-root') as HTMLElement;

  const onSubmitForm = async (e: any) => {
    e.preventDefault();
    try {
      const body = { email, password };

      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      // console.log(parseRes);
      localStorage.setItem('token', parseRes.token);
      setAuth(true);
    } catch (error) {
      let errorMessage = 'Server error';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.error(errorMessage);
    }
    // eslint-disable-next-line no-lone-blocks
    {
      toggleLogin();
    }
  };

  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  return(
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
          <Form onSubmit={onSubmitForm} id='login-form'>
            <FormGroup className='input-field'>
              <Label for='login-email'>Email Address</Label>
              <Input
                value={email}
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
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
    // modalRoot
  );
}

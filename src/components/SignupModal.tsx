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

export function SignupModal(props: any, setAuth: any = {}) {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    name: '',
  });

  const { email, password, name } = inputs;

  const toggleSignup = () => {
    setIsSignupOpen(!isSignupOpen);
  };

  const handleChange = (e: any) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e: any) => {
    e.preventDefault();
    try {
      const body = { email, password, name };
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();
      //   console.log(parseRes);
      localStorage.setItem('token', parseRes);

      setAuth(true);
    } catch (error) {
      let errorMessage = 'Server error';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.error(errorMessage);
    }
  };

  return (
    <Fragment>
      {props.renderSignup(toggleSignup)}
      <Modal
        id='modal-signup'
        className='modal'
        isOpen={isSignupOpen}
        centered={true}
        toggle={toggleSignup}
      >
        <ModalBody className='modal-content'>
          <h4>Sign up</h4>
          <br />
          <Form onSubmit={onSubmitForm} id='signup-form'>
            <FormGroup className='input-field'>
              <Label for='signup-email'>Email Address</Label>
              <Input
                value={email}
                onChange={(e) => handleChange(e)}
                type='email'
                name='email'
                data-testid='signup-email'
                autoComplete='on'
                id='signup-email'
                placeholder='Enter email'
                required
              />
            </FormGroup>
            <FormGroup className='input-field'>
              <Label for='sign-up-password'>Choose Password</Label>
              <Input
                value={password}
                onChange={(e) => handleChange(e)}
                type='password'
                name='password'
                id='signup-password'
                placeholder='password'
                required
              />
            </FormGroup>
            <FormGroup className='input-field'>
              <Label for='signup-username'>Choose username</Label>
              <Input
                value={name}
                onChange={(e) => handleChange(e)}
                type='text'
                name='name'
                autoComplete='on'
                id='signup-username'
                placeholder='username'
                required
              />
              <br />
              <Button type='submit' /*onClick={}*/ color='danger' size='sm'>
                Submit
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
}

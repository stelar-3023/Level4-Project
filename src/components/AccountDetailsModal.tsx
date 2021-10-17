import { Fragment, useState, useEffect } from 'react';
import { Modal, ModalBody } from 'reactstrap';

export function AccountModal(props: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccount = () => {
    setIsOpen(!isOpen);
  };

  const accountDetails = async () => {
    try {
      const response = await fetch ("http://localhost:5000/profile/", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });
      // console.log(response)
      const parseRes = await response.json();
      console.log(parseRes);
      setName(parseRes.user_name); // undefined
      setEmail(parseRes.user_email); // undefined
    } catch (error) {
      let errorMessage = 'Server error'
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.error(errorMessage);
    }
  }

  useEffect(() => {
    accountDetails();
  });

  return (
    <Fragment>
      {props.renderAccount(toggleAccount)}
      <Modal
        id='modal-account'
        className='modal'
        centered={true}
        isOpen={isOpen}
        toggle={toggleAccount}
      >
        <ModalBody className='modal-content'>
          <h2>Account Details</h2>
          <br />
          <div className='account-details'>
            <h4>{email}</h4>
            <h4>{name}</h4>
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
}

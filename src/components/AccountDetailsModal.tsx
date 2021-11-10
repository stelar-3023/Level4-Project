import { Fragment, useState, useEffect } from 'react';
import { Modal, ModalBody } from 'reactstrap';

export function AccountModal(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccount = () => {
    setIsOpen(!isOpen);
  };

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
            <h4>Email: {props.email}</h4>
            <h4>Name: {props.name}</h4>
          </div>
        </ModalBody>
      </Modal>
    </Fragment>
  );
}

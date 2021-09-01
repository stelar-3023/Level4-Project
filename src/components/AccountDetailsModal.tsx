import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";

export function AccountModal(props: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccount = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      {props.renderAccount(toggleAccount)}
      <Modal
        id="modal-account"
        className="modal"
        centered={true}
        toggle={toggleAccount}
      >
        <ModalBody className="modal-content">
          <h2>Account Details</h2>
          <br />
          <div className="account-details">
            <h4>{props.user.email}</h4>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

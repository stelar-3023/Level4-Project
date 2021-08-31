import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";

export function AccountModal() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleAccount() {
    setIsOpen(!isOpen);
  }

  return (
    <React.Fragment>
        <Modal id="modal-account" className="modal" centered={true} onClick={()=> toggleAccount} >
        <ModalBody className="modal-content">
          <h2>Account Details</h2>
          <br />
          <div className="account-details">
            <h4>account details here</h4>
          </div>
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
}

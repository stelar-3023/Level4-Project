import { Fragment, useState } from 'react';
import { Button, Input, Modal, ModalBody, Table } from 'reactstrap';

export function LogModal(props: any) {
  const [isLogOpen, setIsLogOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [workouts, setWorkouts] = useState([]);

  const toggleLog = () => {
    setIsLogOpen(!isLogOpen);
  };

  const cancelUpdate = () => {
    setIsLogOpen(false);
    setIsUpdating(false);
  };




  return (
    <Fragment>
      {props.renderLog(toggleLog)}
      <Modal
        id='modal-log'
        className='modal'
        isOpen={isLogOpen}
        centered={true}
        toggle={toggleLog}
      >
        <ModalBody>
          <Button
          className="cancel-log"
          onClick={cancelUpdate}
          size="sm"
          color="danger"
          >
            &times;
          </Button>
          <h2>Workout</h2>
          
        </ModalBody>
      </Modal>
    </Fragment>
  );
}

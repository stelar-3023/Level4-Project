import { Fragment, useState } from 'react';
import { Button, Input, Modal, ModalBody, Table } from 'reactstrap';

export function LogModal(props: any) {
  const [isLogOpen, setIsLogOpen] = useState(false);
  const [workouts, setWorkouts] = useState([]);

  const toggleLog = () => {
    setIsLogOpen(!isLogOpen);
  };

  
}

import { Fragment, useState, useEffect } from 'react';
import { Button, Input, Modal, ModalBody, Table } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteExercise, updateExercise } from '../redux/exerciseSlice';
import store from '../redux/store';

export function LogModal(props: any) {
  const dispatch = useDispatch();
  const exercises = useSelector((state: any) => state.exercises);
  const [isLogOpen, setIsLogOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  // const [exercises, setExercises] = useState([]);

  const toggleLog = () => {
    setIsLogOpen(!isLogOpen);
  };

  const cancelModal = () => {
    setIsLogOpen(false);
    setIsUpdating(false);
  };

  const removeExercises = (e: any) => {
    const exercisePosition = e.target.id;
    // console.log(exercises.exercises[0].exercise_id);
    dispatch(deleteExercise(exercises.exercises[exercisePosition].exercise_id));
    // console.log('deleting..');
  };

  console.log(exercises);
  console.log(exercises.exercises);

  const updateExercises = (e: any) => {
    const exercisePosition = e.target.id;
    // console.log(exercises.exercises[exercisePosition].exercise_id);
    setIsUpdating(true);
    dispatch(updateExercise(exercises.exercises[exercisePosition].exercise_id));
    // console.log('updating...');
  };

  const renderInputs = () => {
    return (
      <div>
        <Input></Input>
        <br />
        <Input></Input>
        <br />
        <Button
          onClick={() => {
            // saveExercise();
          }}
          type='submit'
          size='sm'
          className='mb-1 log-button save-button'
        >
          Save
        </Button>
        <Button
          onClick={() => {
            cancelModal();
          }}
          type='submit'
          size='sm'
          className='mb-1 log-button save-button'
        >
          Cancel
        </Button>
      </div>
    );
  };

  const renderTable = () => {
    return (
      <Table>
        <thead>
          <tr>
            <th>Exercises</th>
            <th>Reps</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {exercises.exercises.map((exercise: any, index: any) => (
            <tr key={exercise.exercise_id}>
              <td>{exercise.exercise}</td>
              <td>{exercise.reps}</td>
              <td>{exercise.weight}</td>
              <td>
                <Button
                  id={index}
                  onClick={(e) => updateExercises(e)}
                  type='submit'
                  size='sm'
                  className='log-button'
                >
                  Modify
                </Button>
              </td>
              <td>
                <Button
                  id={index}
                  onClick={(e) => removeExercises(e)}
                  type='submit'
                  size='sm'
                  className='log-button'
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
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
            className='cancel-log'
            onClick={cancelModal}
            size='sm'
            color='danger'
          >
            &times;
          </Button>
          <h2>Workout</h2>
          {isUpdating ? renderInputs() : renderTable()}
        </ModalBody>
      </Modal>
    </Fragment>
  );
}

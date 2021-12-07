import { Fragment, useState } from 'react';
import { Button, Modal, ModalBody, Table } from 'reactstrap';
import store from '../redux/store';

export function LogModal(props: any) {
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

  // const deleteExercise = async (id: any) => {
  //   try {
  //     const deleteExercise = await fetch(
  //       `http://localhost:5000/exercises/${id}`,
  //       {
  //         method: 'DELETE',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       }
  //     );
  //     console.log(deleteExercise);
  //     setExercises(
  //       exercises.filter((exercise: any) => exercise.exercise.id !== id)
  //     );
  //     getExercises();
  //   } catch (error) {
  //     let errorMessage = 'Sever error';
  //     if (error instanceof Error) {
  //       errorMessage = error.message;
  //     }
  //     console.log(errorMessage);
  //   }
  // };

  // const getExercises = async () => {
  //   try {
  //     console.log("log", props.email);
  //     const response = await fetch(`http://localhost:5000/exercises/${email}`);
  //     const parseRes = await response.json();


  //     console.log(parseRes);
  //     // setExercises(parseRes);
  //   } catch (error) {
  //     let errorMessage = 'Server error';
  //     if (error instanceof Error) {
  //       errorMessage = error.message;
  //     }
  //     console.log(errorMessage);
  //   }
  // };

  // useEffect(() => {
  //   getExercises();
  // },[getExercises()]);
  // console.log(exercises);

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
          {/* {exercises.map((exercise: any) => (
            <tr key={exercise.exercise_id}>
              <td>{exercise.exercise}</td>
              <td>{exercise.reps}</td>
              <td>{exercise.weight}</td>
              <td>
                <Button type='submit' size='sm' className='log-button'>
                  Modify
                </Button>
              </td>
              <td>
                <Button
                  // onClick={() => deleteExercise(exercise.exercise_id)}
                  type='submit'
                  size='sm'
                  className='log-button'
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))} */}
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
          {renderTable()}
        </ModalBody>
      </Modal>
    </Fragment>
  );
}

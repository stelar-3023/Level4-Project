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

// import { v4 as uuidv4 } from "uuid";

export function WorkoutModal(props: any) {
  const [isLogWorkoutOpen, setIsLogWorkoutOpen] = useState(false);
  // const [workouts, setWorkouts] = useState([]);
  const [exercise, setExercise] = useState('');
  const [reps, setReps] = useState(0);
  // const [weight, setWeight] = useState(0);

  const toggleWorkout = () => {
    setIsLogWorkoutOpen(!isLogWorkoutOpen);
  };

  return (
    <Fragment>
      {props.renderWorkout(toggleWorkout)}
      <Modal
        id='modal-exercise'
        className='modal'
        centered={true}
        toggle={toggleWorkout}
      >
        <ModalBody>
          <h4>Add Exercises</h4>
          <br />
          <Form id='exercise-form'>
            <FormGroup className='input-field'>
              <Label for='exercise'>Exercise</Label>
              <Input
                value={exercise}
                onChange={(e) => setExercise(e.target.value)}
                type='text'
                name='exercise'
                autoComplete='off'
                id='exercise'
                placeholder='exercise'
                required
              />
            </FormGroup>
            <FormGroup className='input-field'>
              <Label for='repetitions'>Reps</Label>
              <Input
                value={reps}
                onChange={(e) => setReps(parseInt(e.target.value))}
                type='number'
                name='reps'
                autoComplete='off'
                id='reps'
                placeholder='reps'
                required
              />
              <Button
                /* onClick={addExercise}*/ type='submit'
                color='danger'
                size='sm'
              >
                Add Exercise
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
}

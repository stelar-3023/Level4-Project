import { Fragment, useState, useEffect } from 'react';
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
  const [state, setState] = useState({});
  const [isLogWorkoutOpen, setIsLogWorkoutOpen] = useState(false);
  const [inputs, setInputs] = useState({
    exercise: '',
    reps: 0,
    weight: 0,
    date: new Date(),
  });

  // clean the state in the unmount of the component
  useEffect(() => {
    resetInputs();
    return () => {
      setState({});
    };
  }, []);

  const resetInputs = () => {
    setInputs({
      exercise: '',
      reps: 0,
      weight: 0,
      date: new Date(),
    });
  };

  const toggleWorkout = () => {
    setIsLogWorkoutOpen(!isLogWorkoutOpen);
  };

  const cancelModal = () => {
    setIsLogWorkoutOpen(false);
  };

  const { exercise, reps, weight, date } = inputs;

  const handleChange = (e: any) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const addExercise = async (e: any) => {
    e.preventDefault();
    try {
      const body = {
        exercise,
        reps,
        weight,
        date,
      };
      const response = await fetch(`http://localhost:5000/exercises/${props.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      let errorMessage = 'Server error';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      console.log(errorMessage);
    }
    // eslint-disable-next-line no-lone-blocks
    {
      toggleWorkout();
      resetInputs();
    }
  };

  return (
    <Fragment>
      {props.renderWorkout(toggleWorkout)}
      <Modal
        id='modal-exercise'
        className='modal'
        centered={true}
        isOpen={isLogWorkoutOpen}
        toggle={toggleWorkout}
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
          <h2>Add Exercises</h2>
          <br />
          <Form onSubmit={addExercise} id='exercise-form'>
            <FormGroup className='input-field'>
              <Label for='exercise'>Exercise</Label>
              <Input
                value={exercise}
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
                type='number'
                name='reps'
                autoComplete='off'
                id='reps'
                placeholder='reps'
                required
              />
            </FormGroup>
            <FormGroup className='input-field'>
              <Label for='repetitions'>Weight</Label>
              <Input
                value={weight}
                onChange={(e) => handleChange(e)}
                type='number'
                name='weight'
                autoComplete='off'
                id='weight'
                placeholder='weight'
                required
              />
            </FormGroup>
            <br />
            <Button
              // onClick={addExercise}
              type='submit'
              color='danger'
              size='sm'
            >
              Add Exercise
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
}

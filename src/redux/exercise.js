import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const accountDetails = createAsyncThunk(
  'user/accountDetails',
  async () => {
    const response = await fetch('http://localhost:5000/profile/', {
      method: 'POST',
      headers: { jwt_token: localStorage.token },
    });
    console.log(response);
    if (response.ok) {
      const user = await response.json();
      return { user };
    } else {
      const error = new Error(
        `Error ${response.status}: ${response.statusText}`
      );
      error.response = response;
      throw error;
    }
  }
);

export const getExercises = createAsyncThunk(
  'exercises/getExercises',
  async () => {
    const response = await fetch(`http://localhost:5000/exercises/`);
    if (response.ok) {
      const exercises = await response.json();
      return { exercises };
    } else {
      const error = new Error(
        `Error ${response.status}: ${response.statusText}`
      );
      error.response = response;
      throw error;
    }
  }
);

const exerciseSlice = createSlice({
  // State
  name: 'exercises',
  initialState: {
    exercises: [],
    user: {},
  },
  reducers: {
    addExercise: (state, action) => {
      const newExercise = {
        exercise: action.payload.exercise,
        reps: action.payload.reps,
        weight: action.payload.weight,
        date: new Date().toLocaleDateString(),
      };
      state.exercises.push(newExercise);
    },
  },
  extraReducers: {
    [getExercises.fulfilled]: (state, action) => {
      state.exercises = action.payload.exercises;
    },
    [accountDetails.pending]: (state, action) => {
      console.log('fetching user...');
    },
    [accountDetails.fulfilled]: (state, action) => {
      console.log('fetched user successfully');
      state.user = action.payload.user;
    },
  },
});

// Actions
export const { addExercise } = exerciseSlice.actions;

export default exerciseSlice.reducer;

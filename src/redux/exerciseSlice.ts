import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getExercises: any = createAsyncThunk(
  'exercises/getExercises',
  async (email) => {
    const response = await fetch(`http://localhost:5000/exercises/${email}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      // console.log(response);
      const exercises = await response.json();
      // console.log(exercises);
      return { exercises };
    } else {
      const error: any = new Error(
        `Error ${response.status}: ${response.statusText}`
      );
      error.response = response;
      throw error;
    }
  }
);

export const deleteExercise: any = createAsyncThunk(
  'exercises/deleteExercise',
  async (id) => {
    const response = await fetch(`http://localhost:5000/exercises/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      const exercise = await response.json();
      console.log(exercise);
      return { exercise };
    } else {
      const error: any = new Error(
        `Error ${response.status}: ${response.statusText}`
      );
      error.response = response;
      throw error;
    }
  }
);

const exerciseSlice = createSlice({
  name: 'exercises',
  initialState: {
    exercises: [],
  },
  reducers: {},
  extraReducers: {
    [getExercises.pending]: (state: any, action: any) => {
      console.log('fetching exercises...');
      state.status = 'fetching exercises...';
    },
    [getExercises.fulfilled]: (state: any, action: any) => {
      console.log('fetched exercises successfully');
      state.exercises = action.payload.exercises;
    },
    [getExercises.rejected]: (state: any, action: any) => {
      console.log('error fetching exercises');
      state.status = 'error fetching exercises';
    },
    [deleteExercise.fulfilled]: (state: any, action: any) => {
    
      console.log('deleted exercise successfully');
      let index = state.exercises.findIndex(({ id }: any) => id === action.payload.id);
      state.exercises.splice(index, 1);
    },
  },
});

export default exerciseSlice.reducer;

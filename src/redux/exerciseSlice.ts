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

const exerciseSlice = createSlice({
  name: 'exercises',
  initialState: {
    exercises: {},
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
  },
});

export default exerciseSlice.reducer;

const express = require('express');
const router = express.Router();
const pool = require('../db');

// add exercise
router.post('/exercises', async (req, res) => {
  try {
    const { exercise, reps, weight } = req.body;
    const newExercise = await pool.query(
      'INSERT INTO exercises (exercise, reps, weight) VALUES ($1, $2, $3) RETURNING *',
      [exercise, reps, weight]
    );

    res.json(newExercise.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// get all exercises
router.get('/exercises', async (req, res) => {
  try {
    const exercises = await pool.query('SELECT * FROM exercises');
    res.json(exercises.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// get exercise by id
router.get('/exercises/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const exercise = await pool.query(
      'SELECT * FROM exercises WHERE exercise_id = $1',
      [id]
    );
    res.json(exercise.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// update exercise
router.put('/exercises/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { exercise, reps, weight } = req.body;
    const updateExercise = await pool.query(
      'UPDATE exercises SET exercise = $1, reps = $2, weight = $3 WHERE exercise_id = $4',
      [exercise, reps, weight, id]
    );
    res.json('Exercise updated');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// delete exercise
router.delete('/exercises/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteExercise = await pool.query(
      'DELETE FROM exercises WHERE exercise_id = $1',
      [id]
    );
    res.json('Exercise deleted');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

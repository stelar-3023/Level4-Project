const express = require('express');
const router = express.Router();
const pool = require('../db');

// add exercise
router.post('/exercises', async (req, res) => {
  try {
    const { exercise, reps, weight, date, email } = req.body;
    const newExercise = await pool.query(
      'INSERT INTO exercises (exercise, reps, weight, date_performed, user_email) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [exercise, reps, weight, date, email]
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
    const { exercise, reps, weight, date, email } = req.body;
    const updateExercise = await pool.query(
      'UPDATE exercises SET exercise = $1, reps = $2, weight = $3, date_performed = $4, user_email= $5 WHERE exercise_id = $6',
      [exercise, reps, weight, date, email, id]
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
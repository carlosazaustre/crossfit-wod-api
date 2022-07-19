const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: "OK", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
  const workout = workoutService.getOneWorkout(req.params.workoutId);
  res.send(`Get workout ${req.params.workoutId}`);
};

const createNewWorkout = (req, res) => {
  const { body } = req;

  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).send({ status: "OK", data: createdWorkout });
};

const updateOneWorkout = (req, res) => {
  const updatedWorkout = workoutService.updateOneWorkout(req.params.workoutId);
  res.send(`Update workout ${req.params.workoutId}`);
};

const deleteOneWorkout = (req, res) => {
  workoutService.deleteOneWorkout(req.params.workoutId);
  res.send(`Delete workout ${req.params.workoutId}`);
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};

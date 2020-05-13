const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const location = req.body.location;
  const transportation = req.body.transportation;
  const hotel = req.body.hotel;
  const passengers = req.body.passengers;
  const days = Number(req.body.days);
  const startdate = Date.parse(req.body.startdate);
  const enddate = Date.parse(req.body.enddate);


  const newExercise = new Exercise({
    username,
    location,
    transportation,
    hotel,
    passengers,
    days,
    startdate,
    enddate
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => {
      exercise.username = req.body.username;
      exercise.location = req.body.location;
      exercise.transportation = req.body.transportation;
      exercise.hotel = req.body.hotel;
      exercise.passengers = Number(req.body.passengers);
      exercise.days = Number(req.body.days);
      exercise.startdate = Date.parse(req.body.startdate);
      exercise.enddate = Date.parse(req.body.enddate);

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

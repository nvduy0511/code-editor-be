const express = require('express');
const router = express.Router();
const doExerciseController = require('../controllers/DoExerciseController');

router.post('/', doExerciseController.createOrUpdate);

router.delete('/', doExerciseController.delete);

router.get('/get-all', doExerciseController.getAll);
module.exports = router;

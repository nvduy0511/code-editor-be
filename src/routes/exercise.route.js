const express = require('express');
const router = express.Router();

const exerciseController = require('../controllers/ExerciseController');

router.post('/', exerciseController.createOrUpdate);

router.delete('/', exerciseController.delete);

module.exports = router;

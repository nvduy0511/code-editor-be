const express = require('express');
const router = express.Router();

const exerciseController = require('../controllers/ExerciseController');

router.post('/', exerciseController.createOrUpdate);

router.delete('/', exerciseController.delete);

router.get('/get-all', exerciseController.getAll);

router.get('/get-length', exerciseController.getLength);

module.exports = router;

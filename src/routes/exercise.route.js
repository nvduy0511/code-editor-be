const express = require('express');
const router = express.Router();

const exerciseController = require('../controllers/ExerciseController');

router.post('/', exerciseController.createOrUpdate);

router.delete('/', exerciseController.delete);

router.get('/get-all', exerciseController.getAll);

module.exports = router;

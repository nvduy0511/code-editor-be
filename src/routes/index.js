const express = require('express');
const router = express.Router();
const compileCodeRoute = require('./compile-code.route');
const userRoute = require('./user.route');
const doExerciseRoute = require('./do-exercise.route');
const exerciseRoute = require('./exercise.route');

router.use('/compile-code', compileCodeRoute);

router.use('/user', userRoute);

router.use('/do-exercise', doExerciseRoute);

router.use('/exercise', exerciseRoute);

module.exports = router;

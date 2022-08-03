import express from 'express';
import compileCodeRoute from './compile-code.route';
import userRoute from './user.route';
import doExerciseRoute from './do-exercise.route';
import exerciseRoute from './exercise.route';
const router = express.Router();

router.use('/compile-code', compileCodeRoute);

router.use('/user', userRoute);

router.use('/do-exercise', doExerciseRoute);

router.use('/exercise', exerciseRoute);

export default router;

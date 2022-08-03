import express from 'express';
import doExerciseController from '../controllers/DoExerciseController';
const router = express.Router();

router.post('/', doExerciseController.createOrUpdate);

router.delete('/', doExerciseController.delete);

router.get('/get-all', doExerciseController.getAll);

export default router;

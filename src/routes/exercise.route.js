import express from 'express';
import exerciseController from '../controllers/ExerciseController';
const router = express.Router();

router.post('/', exerciseController.createOrUpdate);

router.delete('/', exerciseController.delete);

router.get('/get-all', exerciseController.getAll);

router.get('/get-length', exerciseController.getLength);

export default router;

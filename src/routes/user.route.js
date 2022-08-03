import express from 'express';
import userController from '../controllers/UserController';
const router = express.Router();

router.get('/', (req, res) => {
    res.send('user api');
});

router.post('/', userController.findOrCreate);

router.get('/get-one', userController.getOne);

router.get('/get-all', userController.getAll);

export default router;

import express from 'express';
import compileCodeController from '../controllers/CompileCodeController';
const router = express.Router();

router.post('/', compileCodeController.runCode);
router.post('/submit-code', compileCodeController.runCodes);

export default router;

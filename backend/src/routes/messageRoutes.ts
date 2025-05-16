import { Router } from 'express';
import { fetchMessages, createMessage } from '../controllers/messageControllers';

const router = Router();

router.get('/', fetchMessages);
router.post('/guardar_contexto', createMessage);

export default router;

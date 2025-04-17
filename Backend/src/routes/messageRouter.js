import express from 'express';
const router = express.Router()
import { sendMessageController } from '../controllers/messageController.js';

router.post('/send',sendMessageController);

export default router;
import express from 'express';
const router = express.Router()
import { sendMessageController } from '../controllers/messageController';
router.post('/send',sendMessageController);

export default router;
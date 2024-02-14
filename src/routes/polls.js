import express from 'express';
import * as pollsController from '../controllers/polls.js';

const router = express.Router();

router.get('/poll', pollsController.getAllPolls);
router.get('/poll/:id/result', pollsController.getPollResult);
router.post('/poll', pollsController.createPoll);

export default router;

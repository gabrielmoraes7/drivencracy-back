import express from 'express';
import * as votesController from '../controllers/votes.js';
import * as choicesController from '../controllers/choices.js';
import { validateVote } from '../middlewares/validateVote.js';

const router = express.Router();

router.post('/polls/:id/votes', validateVote, votesController.registerVote);
router.post('/choice', choicesController.createChoice);

export default router;




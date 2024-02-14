import { Poll } from '../models/poll.js';
import { Choice } from '../models/choice.js';

export const createChoice = async (req, res) => {
  try {
    const { error } = choiceSchema.validate(req.body);
    if (error) {
      return res.status(422).json({ error: error.details[0].message });
    }

    const poll = await Poll.findById(req.body.pollId);
    if (!poll) {
      return res.status(404).json({ error: 'Poll not found' });
    }

    if (poll.expiredAt < new Date()) {
      return res.status(403).json({ error: 'Poll has expired' });
    }

    const existingChoices = await Choice.findByPoll(poll._id);
    if (existingChoices.some((c) => c.title === req.body.title)) {
      return res.status(409).json({ error: 'Choice already exists' });
    }

    const choiceData = { ...req.body, poll: poll._id };
    const choice = await Choice.create(choiceData);

    res.status(201).json(choice);
  } catch (err) {
    res.status(500).json({ error: 'Error creating choice' });
  }
};

import { Poll } from '../models/poll.js';
import { Vote } from '../models/vote.js';
import { voteSchema } from '../schemas/schema.vote.js';

export const registerVote = async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id);
    if (!poll) {
      return res.status(404).json({ error: 'Poll not found' });
    }

    const { error } = voteSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const voteData = { ...req.body, poll: poll._id };
    const vote = await Vote.create(voteData);

    res.status(201).json(vote);
  } catch (err) {
    res.status(500).json({ error: 'Error registering vote' });
  }
};

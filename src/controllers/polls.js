import { Poll } from '../models/poll.js';
import { Vote } from '../models/vote.js';
import { pollSchema } from '../schemas/schema.poll.js';

export const getAllPolls = async (req, res) => {
  try {
    const polls = await Poll.find();
    res.json(polls);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving polls' });
  }
};

export const getPollResult = async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id);
    if (!poll) {
      return res.status(404).json({ error: 'Poll not found' });
    }

    const votes = await Vote.findByPoll(poll._id);
    const result = {
      _id: poll._id,
      title: poll.title,
      votes: votes.length,
    };

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving poll result' });
  }
};

export const createPoll = async (req, res) => {
  try {
    const { error } = pollSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const poll = await Poll.create(req.body);
    res.status(201).json(poll);
  } catch (err) {
    res.status(500).json({ error: 'Error creating poll' });
  }
};

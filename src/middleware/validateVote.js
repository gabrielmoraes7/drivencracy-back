import { voteSchema } from '../schemas/schema.vote.js';

export const validateVote = (req, res, next) => {
  const { error } = voteSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

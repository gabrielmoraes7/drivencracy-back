import Joi from 'joi';

export const voteSchema = Joi.object({
  user: Joi.string().min(3).max(50).required(),
  value: Joi.number().min(1).max(5).required(),
});
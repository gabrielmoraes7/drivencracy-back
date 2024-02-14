import Joi from 'joi';

export const pollSchema = Joi.object({
  title: Joi.string().min(3).max(50).required(),
});
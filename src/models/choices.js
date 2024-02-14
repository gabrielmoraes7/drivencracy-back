import { db } from '../database/database.conection';

export const Choice = {
  async findByPoll(pollId) {
    const choices = await db.collection('choices').find({ poll: pollId }).toArray();
    return choices;
  },
  async create(data) {
    const result = await db.collection('choices').insertOne(data);
    return result.ops[0];
  },
};

import { db } from '../database/database.conection';

export const Vote = {
  async find() {
    const votes = await db.collection('votes').find().toArray();
    return votes;
  },
  async findByPoll(pollId) {
    const votes = await db.collection('votes').find({ poll: pollId }).toArray();
    return votes;
  },
  async create(data) {
    const result = await db.collection('votes').insertOne(data);
    return result.ops[0];
  },
};

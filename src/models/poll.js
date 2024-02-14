import { db } from '../database/database.conection';

export const Poll = {
  async find() {
    const polls = await db.collection('polls').find().toArray();
    return polls;
  },
  async findById(id) {
    const poll = await db.collection('polls').findOne({ _id: id });
    return poll;
  },
  async create(data) {
    const result = await db.collection('polls').insertOne(data);
    return result.ops[0];
  },
};

import { db } from './db';

export const getTasks = async (userId) => {

    const connection = await db.getConnection();
    const taskDetails = await connection.collection('tasks')
        .find({ uid: userId })
        .sort({"date":-1})
        .toArray();

    return taskDetails;
}
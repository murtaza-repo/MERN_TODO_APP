import { db } from './db';

export const createTask = async (task) => {
    const connection = db.getConnection();
    const response = await connection.collection('tasks')
        .insertOne(task);

    return (response.insertedId);
}
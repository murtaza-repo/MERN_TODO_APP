import { db } from './db';
import {ObjectId} from 'mongodb';

export const deleteTask = async (taskId) => {

    const connection = await db.getConnection();
    await connection.collection('tasks')
    .deleteOne(
          {_id: ObjectId(taskId)}   
    );
}
import { db } from './db';
import {ObjectId} from 'mongodb';

export const updateTask = async (taskId, task) => {
    
    const connection = await db.getConnection();
    await connection.collection('tasks')
    .updateOne(
          {_id: ObjectId(taskId)},
          {$set:{"detail": task.detail, "date": task.date}}     
    );
}
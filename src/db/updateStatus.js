import { db } from './db';
import {ObjectId} from 'mongodb';

export const updateStatus = async (taskId, task) => {
    
    const connection = await db.getConnection();
    await connection.collection('tasks')
    .updateOne(
          {_id: ObjectId(taskId)},
          {$set:{"completed": task.completed}}     
    );
}
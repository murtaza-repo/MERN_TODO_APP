import * as admin from 'firebase-admin';
import { deleteTask } from '../db';
import {getTasks} from '../db';

export const deleteTaskRoute = {
    method: 'post',
    path: '/tasks/:id/deleteTask',
    handler: async (req, res) => {
        const token = req.headers.authtoken;
        const { id } = req.params;

        const user = await admin.auth().verifyIdToken(token);

        if(!token || !user){
            res.status(401).json({ message: "User not authenticated" });
        }

        
        await deleteTask(id);
        const updatedTasks = await getTasks(user.uid);

        res.status(201).json(updatedTasks);
    }
};
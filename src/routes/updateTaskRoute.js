import * as admin from 'firebase-admin';
import { updateTask } from '../db';
import {getTasks} from '../db';

export const updateTaskRoute = {
    method: 'post',
    path: '/tasks/:id/updateTask',
    handler: async (req, res) => {
        const token = req.headers.authtoken;
        const { id } = req.params;
        const task = req.body;

        const user = await admin.auth().verifyIdToken(token);

        if(!token || !user){
            res.status(401).json({ message: "User not authenticated" });
        }

        
        await updateTask(id, task);
        const updatedTasks = await getTasks(user.uid);

        res.status(201).json(updatedTasks);
    }
};
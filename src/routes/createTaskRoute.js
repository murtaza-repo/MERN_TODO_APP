import * as admin from 'firebase-admin';
import { createTask } from '../db';

export const createTaskRoute = {
    method: 'post',
    path: '/task/:id/addTask',
    handler: async (req, res) => {
        const token = req.headers.authtoken;
        const task = req.body;

        const user = await admin.auth().verifyIdToken(token);

        if(!token || !user){
            res.status(401).json({ message: "User not authenticated" });
        }

        
        const responseId = await createTask(task);

        res.status(201).json({ responseId });
    }
};
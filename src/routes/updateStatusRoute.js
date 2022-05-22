import * as admin from 'firebase-admin';
import { updateStatus } from '../db';
import {getTasks} from '../db';

export const updateStatusRoute = {
    method: 'post',
    path: '/tasks/:id/updateStatus',
    handler: async (req, res) => {
        const token = req.headers.authtoken;
        const { id } = req.params;
        const task = req.body;

        // console.log(task);

        const user = await admin.auth().verifyIdToken(token);

        if(!token || !user){
            res.status(401).json({ message: "User not authenticated" });
        }

        
        await updateStatus(id, task);
        const updatedTasks = await getTasks(user.uid);

        res.status(201).json(updatedTasks);
    }
};
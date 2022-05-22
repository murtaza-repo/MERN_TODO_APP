import * as admin from 'firebase-admin';
import {getTasks} from '../db';

export const getTasksRoute = {
    method: 'get',
    path: '/tasks/:id',
    handler: async (req, res) => {
        const token = req.headers.authtoken;
        const { id } = req.params;

        const user = await admin.auth().verifyIdToken(token);
        
        if(!user || !token){
            return res.status(401).json({message: "Must be logged in to see tasks"});
        }

        const tasks = await getTasks(id);

        // console.log(tasks);

        res.status(200).json(tasks);
    },
};
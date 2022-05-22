import * as admin from 'firebase-admin';
import { createUserInfo } from '../db';

export const createUserInfoRoute = {
    method: 'post',
    path: '/userInfo',
    handler: async (req, res) => {
        const token = req.headers.authtoken;
        const { userName } = req.body;

        if(!token){
            res.status(401).json({ message: "User not authenticated" });
        }

        const user = await admin.auth().verifyIdToken(token);
        await createUserInfo(userName, user.uid);

        res.status(201).json({ message: "success" });
    }
};
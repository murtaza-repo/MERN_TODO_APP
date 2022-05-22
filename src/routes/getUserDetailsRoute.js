import * as admin from 'firebase-admin';
import { getUserDetails } from '../db';

export const getUserDetailsRoute = {
    method: 'get',
    path: '/user/:id',
    handler: async (req, res) => {
        const token = req.headers.authtoken;
        const { id } = req.params;

        if(!token){
            res.status(401).json({ message: "User not authenticated" });
        }

        await admin.auth().verifyIdToken(token);
        const userDetails = await getUserDetails(id);

        res.status(200).json(userDetails);
    }
};
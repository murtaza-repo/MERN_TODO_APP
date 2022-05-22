import { db } from './db';

export const getUserDetails = async (userId) => {

    const connection = await db.getConnection();
    const userDetails = await connection.collection('users')
        .findOne({ uid: userId });

    return userDetails;
}
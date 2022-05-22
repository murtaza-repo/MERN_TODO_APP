import { db } from './db';

export const createUserInfo = async (userName, userId) => {
    const connection = db.getConnection();
    await connection.collection('users')
        .insertOne({ uid:userId, name: userName});
}
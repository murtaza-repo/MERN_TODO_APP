import express from 'express';
import bodyParser from 'body-parser';
import { db } from './db';
import { routes } from './routes';
import * as admin from 'firebase-admin';
import credentials from './credentials.json';

admin.initializeApp({
    credential: admin.credential.cert(credentials),
});

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

const start = async () => {
    await db.connect('mongodb+srv://murtaza:spPFPKTICNXmJzgv@cluster0.kkyjt.mongodb.net/test');

    if(process.env.NODE_ENV === 'production'){
        app.use(express.static('client/build'));

        app.get('*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
        });
    }

    app.listen(PORT,() => {
        console.log(`Server is listening on port ${PORT}`);
    });
}

start();
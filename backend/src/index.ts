// server.ts
import express from 'express';
import { PrismaClient } from '@prisma/client';
import routerAPI from './routes';
import dotenv from 'dotenv';
import { PORT } from './config';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

routerAPI(app);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

process.on('SIGINT', () => {
    prisma.$disconnect().then(() => {
        console.log('Prisma connection closed');
    });
});

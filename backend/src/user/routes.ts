// routes/userRoutes.ts
import express from 'express';
import * as  UserController from './controllers';

const router = express.Router();

router.post('/users', UserController.createUser);
router.get('/users/:id', UserController.getUserById);
router.get('/users', UserController.getUsers);

export default router;

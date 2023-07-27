// controllers/UserController.ts
import { Request, Response } from 'express';
import * as UserModel from './models';

export async function createUser(req: Request, res: Response) {
    try {
        const userData = req.body; // Suponemos que los datos del usuario vienen en el cuerpo de la solicitud
        console.log(userData);

        const newUser = await UserModel.createUser(userData);
        res.json(newUser);
    } catch (error) {
        console.log(error);

        res.status(500).json({ error: error });
    }
}

export async function getUsers(req: Request, res: Response) {
    try {
        const users = await UserModel.getUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching users.' });
    }
}

export async function getUserById(req: Request, res: Response) {
    try {
        const userId = parseInt(req.params.id, 10); // Suponemos que el ID viene como parámetro en la URL
        const user = await UserModel.getUserById(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the user.' });
    }
}

// Otros controladores para el modelo User

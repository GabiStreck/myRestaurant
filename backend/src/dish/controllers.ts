// controllers/DishController.ts
import { Request, Response } from 'express';
import * as DishModel from './models';

export async function createDish(req: Request, res: Response) {
    try {
        const dishData = req.body; // Suponemos que los datos del plato vienen en el cuerpo de la solicitud
        const newDish = await DishModel.createDish(dishData);
        res.json(newDish);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the dish.' });
    }
}

export async function getDishes(req: Request, res: Response) {
    try {
        const dishes = await DishModel.getDishes();
        res.json(dishes);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching dishes.' });
    }
}

export async function getDishById(req: Request, res: Response) {
    try {
        const dishId = parseInt(req.params.id, 10); // Suponemos que el ID viene como parámetro en la URL
        const dish = await DishModel.getDishById(dishId);
        if (dish) {
            res.json(dish);
        } else {
            res.status(404).json({ message: 'Dish not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the dish.' });
    }
}

// Otros controladores para el modelo Dish

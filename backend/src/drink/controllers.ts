// controllers/DrinkController.ts
import { Request, Response } from 'express';
import * as DrinkModel from './models';

export async function createDrink(req: Request, res: Response) {
    try {
        const drinkData = req.body; // Suponemos que los datos de la bebida vienen en el cuerpo de la solicitud
        const newDrink = await DrinkModel.createDrink(drinkData);
        res.json(newDrink);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the drink.' });
    }
}

export async function getDrinks(req: Request, res: Response) {
    try {
        const drinks = await DrinkModel.getDrinks();
        res.json(drinks);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching drinks.' });
    }
}

export async function getDrinkById(req: Request, res: Response) {
    try {
        const drinkId = parseInt(req.params.id, 10); // Suponemos que el ID viene como parámetro en la URL
        const drink = await DrinkModel.getDrinkById(drinkId);
        if (drink) {
            res.json(drink);
        } else {
            res.status(404).json({ message: 'Drink not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the drink.' });
    }
}

// Otros controladores para el modelo Drink

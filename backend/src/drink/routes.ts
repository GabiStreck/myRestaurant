// routes/drinkRoutes.ts
import express from 'express';
import * as DrinkController from './controllers';

const router = express.Router();
router.post('/drinks', DrinkController.createDrink);
router.get('/drinks', DrinkController.getDrinks);
router.get('/drinks/:id', DrinkController.getDrinkById);

export default router;

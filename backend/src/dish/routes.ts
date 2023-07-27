// routes/dishRoutes.ts
import express from 'express';
import * as DishController from './controllers';

const router = express.Router();

router.post('/dishes', DishController.createDish);
router.get('/dishes', DishController.getDishes);
router.get('/dishes/:id', DishController.getDishById);

export default router;

// routes/menuRoutes.ts
import express from 'express';
import * as MenuController from './controllers';

const router = express.Router();

router.post('/menus', MenuController.createMenu);
router.get('/menus', MenuController.getMenus);
router.get('/menus/:id', MenuController.getMenuById);

export default router;

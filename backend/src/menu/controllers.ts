// controllers/MenuController.ts
import { Request, Response } from 'express';
import * as MenuModel from './models';

export async function createMenu(req: Request, res: Response) {
    try {
        const menuData = req.body; // Suponemos que los datos del menú vienen en el cuerpo de la solicitud
        const newMenu = await MenuModel.createMenu(menuData);
        res.json(newMenu);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the menu.' });
    }
}

export async function getMenus(req: Request, res: Response) {
    try {
        const menus = await MenuModel.getMenus();
        res.json(menus);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching menus.' });
    }
}

export async function getMenuById(req: Request, res: Response) {
    try {
        const menuId = parseInt(req.params.id, 10); // Suponemos que el ID viene como parámetro en la URL
        const menu = await MenuModel.getMenuById(menuId);
        if (menu) {
            res.json(menu);
        } else {
            res.status(404).json({ message: 'Menu not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the menu.' });
    }
}

// Otros controladores para el modelo Menu

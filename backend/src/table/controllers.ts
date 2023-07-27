// controllers/TableController.ts
import { Request, Response } from 'express';
import * as TableModel from './models';

export async function createTable(req: Request, res: Response) {
    try {
        const tableData = req.body; // Suponemos que los datos de la mesa vienen en el cuerpo de la solicitud
        const newTable = await TableModel.createTable(tableData);
        res.json(newTable);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the table.' });
    }
}

export async function getTables(req: Request, res: Response) {
    try {
        const tables = await TableModel.getTables();
        res.json(tables);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching tables.' });
    }
}

export async function getTableById(req: Request, res: Response) {
    try {
        const tableId = parseInt(req.params.id, 10); // Suponemos que el ID viene como parámetro en la URL
        const table = await TableModel.getTableById(tableId);
        if (table) {
            res.json(table);
        } else {
            res.status(404).json({ message: 'Table not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the table.' });
    }
}

// Otros controladores para el modelo Table

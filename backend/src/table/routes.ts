// routes/tableRoutes.ts
import express from 'express';
import * as TableController from '../table/controllers';

const router = express.Router();

router.post('/tables', TableController.createTable);
router.get('/tables', TableController.getTables);
router.get('/tables/:id', TableController.getTableById);
export default router;

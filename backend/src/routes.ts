import { Express } from 'express';
import userRoutes from './user/routes';
import tableRoutes from './table/routes';
import menuRoutes from './menu/routes';
import dishRoutes from './dish/routes';
import drinkRoutes from './drink/routes';
import reservationRoutes from './reservation/routes';

const routerAPI = (app: Express) => {
    app.use('/api', userRoutes);
    app.use('/api', tableRoutes);
    app.use('/api', menuRoutes);
    app.use('/api', dishRoutes);
    app.use('/api', drinkRoutes);
    app.use('/api', reservationRoutes);
}

export default routerAPI
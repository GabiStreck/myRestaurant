// routes/reservationRoutes.ts
import express from 'express';
import * as ReservationController from './controllers';

const router = express.Router();

router.post('/reservations', ReservationController.createReservation);
router.get('/reservations', ReservationController.getReservations);
router.get('/reservations/:id', ReservationController.getReservationById);

export default router;

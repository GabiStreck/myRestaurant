// controllers/ReservationController.ts
import { Request, Response } from 'express';
import * as ReservationModel from './models';

export async function createReservation(req: Request, res: Response) {
    try {
        const reservationData = req.body; // Suponemos que los datos de la reserva vienen en el cuerpo de la solicitud
        const newReservation = await ReservationModel.createReservation(reservationData);
        res.json(newReservation);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the reservation.' });
    }
}

export async function getReservations(req: Request, res: Response) {
    try {
        const reservations = await ReservationModel.getReservations();
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching reservations.' });
    }
}

export async function getReservationById(req: Request, res: Response) {
    try {
        const reservationId = parseInt(req.params.id, 10); // Suponemos que el ID viene como parámetro en la URL
        const reservation = await ReservationModel.getReservationById(reservationId);
        if (reservation) {
            res.json(reservation);
        } else {
            res.status(404).json({ message: 'Reservation not found.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the reservation.' });
    }
}

// Otros controladores para el modelo Reservation

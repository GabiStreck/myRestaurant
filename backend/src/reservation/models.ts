// models/Reservation.ts
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function createReservation(data: Prisma.ReservationCreateInput) {
    return prisma.reservation.create({ data });
}

export async function getReservations() {
    return prisma.reservation.findMany();
}

export async function getReservationById(id: number) {
    return prisma.reservation.findUnique({ where: { id } });
}

// Otros métodos de consulta para el modelo Reservation

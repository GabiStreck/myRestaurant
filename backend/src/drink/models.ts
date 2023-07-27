// models/Drink.ts
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function createDrink(data: Prisma.DrinkCreateInput) {
    return prisma.drink.create({ data });
}

export async function getDrinks() {
    return prisma.drink.findMany();
}

export async function getDrinkById(id: number) {
    return prisma.drink.findUnique({ where: { id } });
}

// Otros métodos de consulta para el modelo Drink

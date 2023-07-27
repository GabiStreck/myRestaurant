// models/Dish.ts
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function createDish(data: Prisma.DishCreateInput) {
    return prisma.dish.create({ data });
}

export async function getDishes() {
    return prisma.dish.findMany();
}

export async function getDishById(id: number) {
    return prisma.dish.findUnique({ where: { id } });
}

// Otros métodos de consulta para el modelo Dish

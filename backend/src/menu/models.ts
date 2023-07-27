// models/Menu.ts
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function createMenu(data: Prisma.MenuCreateInput) {
    return prisma.menu.create({ data });
}

export async function getMenus() {
    return prisma.menu.findMany();
}

export async function getMenuById(id: number) {
    return prisma.menu.findUnique({ where: { id } });
}

// Otros métodos de consulta para el modelo Menu

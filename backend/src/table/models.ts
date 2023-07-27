// models/Table.ts
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function createTable(data: Prisma.TableCreateInput) {
    return prisma.table.create({ data });
}

export async function getTables() {
    return prisma.table.findMany();
}

export async function getTableById(id: number) {
    return prisma.table.findUnique({ where: { id } });
}

// Otros métodos de consulta para el modelo Table

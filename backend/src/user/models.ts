// models/User.ts
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUser(data: Prisma.UserCreateInput) {
    return prisma.user.create({ data });
}

export async function getUsers() {
    return prisma.user.findMany();
}

export async function getUserById(id: number) {
    return prisma.user.findUnique({ where: { id: id } });
}

// Otros métodos de consulta para el modelo User

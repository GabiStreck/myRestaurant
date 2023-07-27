// types/types.ts

// Define los tipos de datos para cada modelo

export interface User {
    id: number;
    email: string;
    name: string;
    imageUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Table {
    id: number;
    number: number;
    capacity: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface Menu {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Dish {
    id: number;
    name: string;
    imageUrl?: string;
    price: number;
    menu: Menu;
    createdAt: Date;
    updatedAt: Date;
}

export interface Drink {
    id: number;
    name: string;
    imageUrl?: string;
    price: number;
    menu: Menu;
    createdAt: Date;
    updatedAt: Date;
}

export interface Reservation {
    id: number;
    date: Date;
    mealType: string;
    table: Table;
    user: User;
    dishes: Dish[];
    drinks: Drink[];
    createdAt: Date;
    updatedAt: Date;
}

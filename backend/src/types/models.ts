export interface User {
    id: number;
    email: string;
    name: string;
    imageUrl?: string;
    createdAt: Date;
    updatedAt: Date;
    Reservation: Reservation[];
    Order: Order[];
}

export interface Table {
    id: number;
    number: number;
    capacity: number;
    indoor: boolean;
    createdAt: Date;
    updatedAt: Date;
    Reservation: Reservation[];
    Order: Order[];
}

export interface Product {
    id: number;
    name: string;
    imageUrl?: string;
    price: number;
    description: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
    category: Category;
    categoryId: number;
    Menu?: Menu;
    menuId?: number;
    Order?: Order;
    orderId?: number;
    Dish?: Dish;
    Drink?: Drink;
}

export interface Dish {
    id: number;
    cookingTime: number;
    allergens: string[];
    ingredients: string[];
    createdAt: Date;
    updatedAt: Date;
    product: Product;
    productId: number;
}

export interface Drink {
    id: number;
    volume: string;
    createdAt: Date;
    updatedAt: Date;
    product: Product;
    productId: number;
}

export interface Category {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    Product: Product[];
}

export interface Menu {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    products: Product[];
}

export interface Reservation {
    id: number;
    date: Date;
    createdAt: Date;
    updatedAt: Date;
    table: Table;
    tableId: number;
    user: User;
    userId: number;
}

export interface Order {
    id: number;
    isPaid: boolean;
    createdAt: Date;
    updatedAt: Date;
    table?: Table;
    tableId?: number;
    user: User;
    userId: number;
    products: Product[];
}

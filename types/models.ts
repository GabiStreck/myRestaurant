export type Product = {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    rating: number;
    categoryId: number;
    menu: number[] | Menu[];
    createdAt: Date;
    updatedAt: Date;
}

export type Category = {
    id: number;
    name: string;
}

export type Menu = {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    products?: Product[];
}
import { Category, Dish, Drink, Menu, Product } from "../types/models";

export const products: Product[] = [
    {
        id: 1,
        name: "Pizza Margherita",
        imageUrl: "https://picsum.photos/254",
        price: 12.99,
        description: "Delicious classic pizza with tomatoes, mozzarella, and basil.",
        rating: 4.5,
        categoryId: 1,
        menu: [2],
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 2,
        name: "Spaghetti Bolognese",
        imageUrl: "https://picsum.photos/254",
        price: 9.99,
        description: "Traditional Italian pasta dish with meaty Bolognese sauce.",
        rating: 4.2,
        categoryId: 2,
        menu: [1, 3],
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 3,
        name: "Caesar Salad",
        imageUrl: "https://picsum.photos/254",
        price: 7.99,
        description: "Classic Caesar salad with romaine lettuce, croutons, and Caesar dressing.",
        rating: 4.8,
        categoryId: 3,
        menu: [2, 3],
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 4,
        name: "Margarita Cocktail",
        imageUrl: "https://picsum.photos/254",
        price: 6.99,
        description: "Refreshing cocktail with tequila, triple sec, and lime juice.",
        rating: 4.6,
        categoryId: 4,
        menu: [3],
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 5,
        name: "Orange Juice",
        imageUrl: "https://picsum.photos/254",
        price: 2.99,
        description: "Freshly squeezed orange juice, packed with vitamin C.",
        rating: 4.9,
        categoryId: 5,
        menu: [1, 2, 3],
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: 6,
        name: "Tiramisu",
        imageUrl: "https://picsum.photos/254",
        price: 5.99,
        description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.",
        rating: 4.7,
        categoryId: 6,
        menu: [1],
        createdAt: new Date(),
        updatedAt: new Date(),
    },
];

export const drinks: Drink[] = [
    {
        id: 1,
        volume: '500ml',
        createdAt: new Date(),
        updatedAt: new Date(),
        product: {
            id: 4,
            name: "Margarita Cocktail",
            imageUrl: "https://picsum.photos/254",
            price: 6.99,
            description: "Refreshing cocktail with tequila, triple sec, and lime juice.",
            rating: 4.6,
            categoryId: 4,
            menu: [3],
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    },
    {
        id: 2,
        volume: '250ml',
        createdAt: new Date(),
        updatedAt: new Date(),
        product: {
            id: 5,
            name: "Orange Juice",
            imageUrl: "https://picsum.photos/254",
            price: 2.99,
            description: "Freshly squeezed orange juice, packed with vitamin C.",
            rating: 4.9,
            categoryId: 5,
            menu: [1, 2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    },

];

export const dishes: Dish[] = [
    {
        id: 1,
        cookingTime: 900,
        allergens: [],
        ingredients: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        product: {
            id: 1,
            name: "Pizza Margherita",
            imageUrl: "https://picsum.photos/254",
            price: 12.99,
            description: "Delicious classic pizza with tomatoes, mozzarella, and basil.",
            rating: 4.5,
            categoryId: 1,
            menu: [2],
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    },
    {
        id: 2,
        cookingTime: 900,
        allergens: ['mani', 'almendra', 'marisco'],
        ingredients: ['fideos', 'tomate', 'carne', 'oregano', 'cebolla', 'albaca'],
        createdAt: new Date(),
        updatedAt: new Date(),
        product: {
            id: 2,
            name: "Spaghetti Bolognese",
            imageUrl: "https://picsum.photos/254",
            price: 9.99,
            description: "Traditional Italian pasta dish with meaty Bolognese sauce.",
            rating: 4.2,
            categoryId: 2,
            menu: [1, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    },
    {
        id: 3,
        cookingTime: 900,
        allergens: [],
        ingredients: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        product: {
            id: 3,
            name: "Caesar Salad",
            imageUrl: "https://picsum.photos/254",
            price: 7.99,
            description: "Classic Caesar salad with romaine lettuce, croutons, and Caesar dressing.",
            rating: 4.8,
            categoryId: 3,
            menu: [2, 3],
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    },
    {
        id: 4,
        cookingTime: 900,
        allergens: [],
        ingredients: [],
        createdAt: new Date(),
        updatedAt: new Date(),
        product: {
            id: 6,
            name: "Tiramisu",
            imageUrl: "https://picsum.photos/254",
            price: 5.99,
            description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.",
            rating: 4.7,
            categoryId: 6,
            menu: [1],
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    },
];



export const categories: Category[] = [
    {
        id: 1,
        name: "Pizzas",
    },
    {
        id: 2,
        name: "Pasta Dishes",
    },
    {
        id: 3,
        name: "Salads",
    },
    {
        id: 4,
        name: "Cocktails",
    },
    {
        id: 5,
        name: "Beverages",
    },
    {
        id: 6,
        name: "Desserts",
    },
    {
        id: 7,
        name: "Sandwichs"
    }
];


const Menus: Menu[] = [
    {
        id: 1,
        name: "Breakfast Menu",
        createdAt: new Date(), updatedAt: new Date(),
        products: [
            {
                id: 6,
                name: "Tiramisu",
                imageUrl: "https://picsum.photos/254",
                price: 5.99,
                description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.",
                rating: 4.7,
                categoryId: 6,
                menu: [1],
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 5,
                name: "Orange Juice",
                imageUrl: "https://picsum.photos/254",
                price: 2.99,
                description: "Freshly squeezed orange juice, packed with vitamin C.",
                rating: 4.9,
                categoryId: 5,
                menu: [1, 2, 3],
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ],
    },
    {
        id: 2,
        name: "Lunch Menu",
        createdAt: new Date(),
        updatedAt: new Date(),
        products: [
            {
                id: 3,
                name: "Caesar Salad",
                imageUrl: "https://example.com/caesar-salad.jpg",
                price: 7.99,
                description: "Classic Caesar salad with romaine lettuce and croutons.",
                rating: 4.8,
                categoryId: 1,
                menu: [2, 3],
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                name: "Club Sandwich",
                imageUrl: "https://example.com/club-sandwich.jpg",
                price: 8.99,
                description: "Triple-decker club sandwich with bacon, turkey, and lettuce.",
                rating: 4.6,
                menu: [2, 3],
                categoryId: 7,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 5,
                name: "Orange Juice",
                imageUrl: "https://picsum.photos/200",
                price: 2.99,
                description: "Freshly squeezed orange juice, packed with vitamin C.",
                rating: 4.9,
                categoryId: 5,
                menu: [1, 2, 3],
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        ],
    },
    {
        id: 3,
        name: "Dinner Menu",
        createdAt: new Date(),
        updatedAt: new Date(),
        products: [
            {
                id: 7,
                name: "Grilled Steak",
                imageUrl: "https://example.com/grilled-steak.jpg",
                price: 19.99,
                description: "Juicy grilled steak served with mashed potatoes and vegetables.",
                rating: 4.9,
                categoryId: 1,
                menu: [3],
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 8,
                name: "Salmon Fillet",
                imageUrl: "https://example.com/salmon-fillet.jpg",
                price: 16.99,
                description: "Fresh salmon fillet with lemon and dill sauce.",
                rating: 4.7,
                menu: [3],
                createdAt: new Date(),
                updatedAt: new Date(),
                categoryId: 1
            },
            {
                id: 3,
                name: "Caesar Salad",
                imageUrl: "https://example.com/caesar-salad.jpg",
                price: 7.99,
                description: "Classic Caesar salad with romaine lettuce and croutons.",
                rating: 4.8,
                categoryId: 1,
                menu: [2, 3],
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                name: "Club Sandwich",
                imageUrl: "https://example.com/club-sandwich.jpg",
                price: 8.99,
                description: "Triple-decker club sandwich with bacon, turkey, and lettuce.",
                rating: 4.6,
                menu: [2, 3],
                categoryId: 7,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 5,
                name: "Orange Juice",
                imageUrl: "https://picsum.photos/200",
                price: 2.99,
                description: "Freshly squeezed orange juice, packed with vitamin C.",
                rating: 4.9,
                createdAt: new Date(),
                updatedAt: new Date(),
                categoryId: 5,
                menu: [1, 2, 3],
            }
        ],
    },

];

export default Menus;


import { Recipe } from "./recipe.model"

export const InMemRecipes: Recipe[] =  [
    {
            name: "Spaghetti", 
            description: "loreorem ipsum dolor sit amet consectetur adipisicing elit. Magni vo",
            imagePath: "https://th.bing.com/th/id/OIP.1fCazfiqHZu3q8g1NgX9fQHaE8?pid=ImgDet&rs=1", 
            id: Math.random().toString().slice(2), 
            ingredients: [{ name: "pasta", amount: 4}, { name: "tomato", amount: 4}]
        },
        {name: "Hamburger", 
        description: "loreorem ipsum dolor sit amet consectetur adipisicing elit. Magni vo",
        imagePath: "https://th.bing.com/th/id/R.be18b41459fbb8d83c9e714553cf5fd1?rik=E8QA86j%2bp2fu8Q&pid=ImgRaw&r=0",
        id: Math.random().toString().slice(2),
        ingredients: [{ name: "meat", amount: 4}, {name: "bun" , amount: 2}]
        }]
    

import { Ingredient } from '../shopping-list/Ingredient.module';


export class Recipe {
  constructor(public name: string, public description: string, public imagePath: string, public id: string, public ingredients: Ingredient[]) {
    name = name;
    description = description;
    imagePath = imagePath;
    id = id
    ingredients = ingredients
  }
}

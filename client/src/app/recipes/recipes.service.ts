import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { InMemRecipes } from './inMemoryRecipes';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Ingredient } from '../shopping-list/Ingredient.module';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  // recipes$: BehaviorSubject<Recipe[]> = new BehaviorSubject(InMemRecipes);
  recipesChanged = new Subject<Recipe[]>();
  recipes$: BehaviorSubject<Recipe[]> = new BehaviorSubject(InMemRecipes);

  constructor(private shoppingListService: ShoppingListService) {
    // console.log(this.recipes$);
  }

  getRecipe(id: number) {
    return this.recipes$.getValue()[id];
  }
  deleteRecipe(id: number) {
    const updatedRecipes = [...this.recipes$.getValue()];
    updatedRecipes.splice(id, 1);

    this.recipes$.next(updatedRecipes);
  }
  onAddToIngredients(id: number) {
    const ingredients = this.recipes$.getValue()[id].ingredients;
    this.shoppingListService.onAddItems(ingredients);
  }
}

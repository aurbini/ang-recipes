import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { InMemRecipes } from './inMemoryRecipes';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  // recipes$: BehaviorSubject<Recipe[]> = new BehaviorSubject(InMemRecipes);
  recipesChanged = new Subject<Recipe[]>();
  recipes$: BehaviorSubject<Recipe[]> = new BehaviorSubject(InMemRecipes);

  constructor() {
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
}

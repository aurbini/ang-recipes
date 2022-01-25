import { Injectable } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private recipeService: RecipesService,
    private httpClient: HttpClient
  ) {}

  saveRecipes() {
    const recipes = this.recipeService.recipes$.getValue();
    this.httpClient
      .put(
        'https://urbini-quotes-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((data) => console.log(data));
  }
  fetchRecipes() {
    return this.httpClient
      .get<Recipe[]>(
        'https://urbini-quotes-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredient: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}

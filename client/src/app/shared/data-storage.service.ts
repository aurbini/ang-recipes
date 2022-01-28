import { Injectable } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';
import { Recipe } from '../recipes/recipe.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  url = environment.url;
  //example connection string
  //Feel free to change it to your needs
  // url = 'localhost/api/recipes';

  constructor(
    private recipeService: RecipesService,
    private httpClient: HttpClient
  ) {}

  saveRecipes() {
    const recipes = this.recipeService.recipes$.getValue();
    this.httpClient
      .put(this.url, recipes)
      .subscribe((data) => console.log(data));
  }
  fetchRecipes() {
    return this.httpClient.get<Recipe[]>(this.url).pipe(
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

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes$: Observable<Recipe[]> = new Observable();
  // recipes$!: Recipe[];
  subscription!: Subscription;

  constructor(private router: Router, private recipesService: RecipesService) {
    this.recipes$ = recipesService.recipes$.pipe(
      map((recipes: Recipe[]) => {
        console.log(recipes);
        return recipes;
      })
    );
    // this.recipes$ = recipesService.recipes$;
    // recipesService.recipes$.subscribe((recipes: Recipe[]) => {
    //   this.recipes$ = recipes
    // })
  }

  ngOnInit(): void {
    // this.subscription = this.recipesService.recipesChanged.subscribe(
    //   (recipes: Recipe[]) => {
    //     this.recipes$ = recipes;
    //   }
    // );
    // console.log(this.recipesService.getRecipes());
    // this.recipes$ = this.recipesService.getRecipes();
  }
  onAddRecipe() {
    this.router.navigate(['/recipes/new']);
  }
}

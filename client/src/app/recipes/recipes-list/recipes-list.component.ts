import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes$ : Observable<Recipe[]> = new Observable();

  constructor(private router: Router, private recipesService: RecipesService) {
    this.recipes$ = recipesService.recipes
  }

  ngOnInit(): void {}
  onAddRecipe() {
    this.router.navigate(['/recipes/new']);
  }
}

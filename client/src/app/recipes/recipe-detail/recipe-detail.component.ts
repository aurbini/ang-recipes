import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipe!: Recipe;
  id!: string;

  constructor(private recipesService: RecipesService,
              private route: ActivatedRoute,
              private router: Router) {
                this.route.params
                .subscribe(
                  (params: Params) => {
                    this.id = params['id'];
                    console.log(this.id)
                    this.selectedRecipe = this.recipesService.getRecipe(this.id);
                  }
                );
  }

  ngOnInit() {

  }
  

}

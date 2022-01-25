import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Ingredient } from '../../shopping-list/Ingredient.module';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css'],
})
export class RecipeStartComponent implements OnInit {
  // ingredientsArray: Ingredient[] = [];
  constructor() {}

  ngOnInit(): void {}
}

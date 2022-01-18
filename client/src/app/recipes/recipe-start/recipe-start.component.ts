import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Ingredient } from '../../shopping-list/Ingredient.module';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css'],
})
export class RecipeStartComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    imagePath: new FormControl(),
    ingredients: new FormArray([]),
  });

  // ingredientsArray: Ingredient[] = [];
  constructor() {
    console.log(this.form);
  }

  ngOnInit(): void {}
}

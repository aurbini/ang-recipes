import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { BehaviorSubject, filter } from 'rxjs';
import { InMemRecipes } from './inMemoryRecipes';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {
    
    recipes : BehaviorSubject<Recipe[]> = new BehaviorSubject(InMemRecipes) 


    constructor(){
    }
    
    getRecipe(id: string){
        const selectedIndex = this.recipes.getValue().findIndex(recipe => recipe.id === id)
        return this.recipes.getValue()[selectedIndex]
    }
}
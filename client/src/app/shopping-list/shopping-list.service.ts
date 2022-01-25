import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Ingredient } from './Ingredient.module';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  shoppingList$: BehaviorSubject<Ingredient[]> = new BehaviorSubject<
    Ingredient[]
  >([
    {
      name: 'pasta',
      amount: 2,
    },
    {
      name: 'tomato sauce',
      amount: 3,
    },
  ]);
  startedEditing = new Subject<number>();

  onAddItem(ingredient: Ingredient) {
    const updatedShoppingList = [...this.shoppingList$.getValue()];
    updatedShoppingList.push(ingredient);
    this.shoppingList$.next(updatedShoppingList);
    console.log(ingredient);
  }
  onAddItems(ingredients: Ingredient[]) {
    const updatedShoppingList = [
      ...this.shoppingList$.getValue(),
      ...ingredients,
    ];
    this.shoppingList$.next(updatedShoppingList);
  }

  getItem(index: number) {
    return this.shoppingList$.getValue()[index];
  }
  onDeleteItem(id: number) {
    const updatedList = [...this.shoppingList$.getValue()];
    updatedList.splice(id, 1);
    this.shoppingList$.next(updatedList);
  }
  onEditItem(ingredient: Ingredient, index: number) {
    const updatedList = [...this.shoppingList$.getValue()];
    updatedList[index] = ingredient;
    this.shoppingList$.next(updatedList);
  }
}

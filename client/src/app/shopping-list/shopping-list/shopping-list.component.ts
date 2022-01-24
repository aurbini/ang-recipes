import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../Ingredient.module';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  shoppingList$: Observable<Ingredient[]>;
  editId: number | null = null;
  editMode: boolean = false;
  constructor(private shoppingListService: ShoppingListService) {
    this.shoppingList$ = shoppingListService.shoppingList$;
  }

  ngOnInit(): void {}

  onEdit(i: number) {
    console.log(i);
    this.shoppingListService.startedEditing.next(i);
  }
  onDeleteIngredient(id: number) {}
}

import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Ingredient } from '../Ingredient.module';
import { ShoppingListService } from '../shopping-list.service';
import { elementAt, filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @ViewChild('f', { static: false }) slForm: NgForm;
  editId: number;
  editMode: boolean = false;
  subscription: Subscription;
  editedItem: Ingredient;

  constructor(
    private route: ActivatedRoute,
    private shoppingList: ShoppingListService
  ) {
    this.editId = route.snapshot.params['id'];
    this.subscription = this.shoppingList.startedEditing.subscribe(
      (index: number) => {
        console.log('edit mode');
        this.editId = index;
        this.editMode = true;
        this.editedItem = this.shoppingList.getItem(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }
  onSubmit(form: NgForm) {
    const ingredient = form.value;
    if (!this.editMode) {
      this.shoppingList.onAddItem(ingredient);
    } else {
      this.shoppingList.onEditItem(ingredient, this.editId);
    }
    this.onClear();
  }
  onDeleteIngredient() {
    console.log(this.editId);
    this.shoppingList.onDeleteItem(this.editId);
    this.onClear();
  }
  onClear() {
    this.slForm.reset();
  }
}

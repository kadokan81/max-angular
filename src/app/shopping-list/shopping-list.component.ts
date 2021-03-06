import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from './shopingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients!: Ingredient[];

  constructor(private slService: ShopingListService) {}

  ngOnInit() {
    this.ingredients = this.slService.getOngridient();
    this.slService.ingredientsChange.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}

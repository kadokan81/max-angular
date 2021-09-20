import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShopingListService {
  ingredientsChange = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('flor', 10),
  ];

  addIngidients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChange.emit(this.ingredients.slice());
  }

  getOngridient() {
    return this.ingredients.slice();
  }

  addIngredients(ingt: Ingredient[]) {
    this.ingredients.push(...ingt);
    this.ingredientsChange.emit(this.ingredients.slice());
  }
}

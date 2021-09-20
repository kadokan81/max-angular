import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShopingListService } from '../shopping-list/shopingList.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecepiesServers {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Chicken with green',
      'This is simply a test',
      'https://realfood.tesco.com/media/images/RFO-October2020-65809-Tesco-LetsCook-Oct20-65850-SpicedChickenGreenBeans1400x919-38f3e9b0-7241-49a3-83fe-fcc38d2c24be-0-1400x919.jpg',
      [new Ingredient('meat', 1), new Ingredient('potato', 3)]
    ),
    new Recipe(
      'Grilled Sweet Potatoes',
      'This is simply a test',
      'https://www.simplyrecipes.com/thmb/SDsQm323X7tk4wRZ0sXtkL-jvuM=/1600x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-horiz-a-1600-7c8292daa98e4020b447f0dc97a45cb7.jpg',
      [new Ingredient('chiken', 1), new Ingredient('pasta', 3)]
    ),
  ];
  constructor(private slService: ShopingListService) {}

  getRecipe() {
    return this.recipes.slice();
  }

  addIngrerientsToShopingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}

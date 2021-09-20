import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecepiesServers } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecepiesServers],
})
export class RecipesComponent implements OnInit {
  selectedRecipe!: Recipe;

  constructor(private recipeService: RecepiesServers) {}

  ngOnInit() {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}

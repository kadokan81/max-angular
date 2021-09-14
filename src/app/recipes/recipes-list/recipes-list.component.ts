import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recepies: Recipe[] = [
    new Recipe(
      'Recepis',
      'test recepi',
      'https://static01.nyt.com/images/2017/04/05/dining/05COOKING-TIRAMISU1/05COOKING-TIRAMISU1-articleLarge.jpg'
    ),
    new Recipe(
      'Recepis second',
      ' second test recepi',
      'https://img.taste.com.au/We7mMCPn/w720-h480-cfill-q80/taste/2016/11/basic-cupcakes-49457-1.jpeg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}

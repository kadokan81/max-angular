import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../sharing/ingridient.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('tomato', 4),
    new Ingredient('apple', 1),
  ];

  constructor() {}

  ngOnInit(): void {}
}

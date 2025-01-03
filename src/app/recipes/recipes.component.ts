import { Component, OnInit } from '@angular/core';
import { Recipe, MockRecipes } from '../recipes';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipes: Array<Recipe> = MockRecipes;

  constructor() {
  }

  ngOnInit() {
    console.log(this.recipes)
  }

}
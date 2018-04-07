import { Component, OnInit } from '@angular/core';
import Recipe from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('First Recipe','This is a test recipe','https://inspirationseek.com/wp-content/uploads/2016/02/Chicken-Cordon-Bleu-Pictures-720x340.jpg')
  ];

  constructor() { }

  ngOnInit() {

  }

}

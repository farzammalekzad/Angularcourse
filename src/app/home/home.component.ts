import { Component, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';
import {PromotionsService} from '../services/promotions.service';
import {Promotion} from '../shared/promotion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;

  constructor(private dishService: DishService, private promotionsService: PromotionsService) { }

  ngOnInit() {
  this.dish = this.dishService.getFeaturedDish();
  this.promotion = this.promotionsService.getFeaturedPromotion();
  }

}

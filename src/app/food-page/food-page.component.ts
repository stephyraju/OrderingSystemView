import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FoodService} from "../Services/food/food.service";
import { Food } from 'src/app/shared/models/Food';
import {CartService} from "../Services/cart.service";

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.css'
})
export class FoodPageComponent implements OnInit {

  food!: Food;
  constructor(private activatedRoute:ActivatedRoute,
              private foodService: FoodService,
              private cartService: CartService,
              private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if(params['id'])
        this.food = foodService.getFoodById(params['id']);
    })

  }

  ngOnInit(): void {
  }

  // addToCart(){
  //   this.cartService.addToCart(this.food);
  //   this.router.navigateByUrl("/cart-page");
  // }


  addToCart(){
    console.log('Adding food to cart:', this.food);
    this.cartService.addToCart(this.food);
    console.log('Navigating to cart page');
    this.router.navigateByUrl("/cart-page").then(success => {
      if (success) {
        console.log('Navigation to cart page successful');
      } else {
        console.log('Navigation to cart page failed');
      }
    }).catch(err => {
      console.log('Error navigating to cart page:', err);
    });
  }

}

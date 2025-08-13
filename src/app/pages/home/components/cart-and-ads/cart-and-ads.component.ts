import { Component } from '@angular/core';
import { CartComponent } from "./components/cart/cart.component";
import { AdsComponent } from "./components/ads/ads.component";

@Component({
  selector: 'app-cart-and-ads',
  imports: [CartComponent, AdsComponent],
  templateUrl: './cart-and-ads.component.html',
  styleUrl: './cart-and-ads.component.css'
})
export class CartAndAdsComponent {

}

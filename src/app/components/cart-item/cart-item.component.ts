import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() product: {
    img: string,
    name: string,
    price: number
  } = {
    img: '',
    name: '',
    price: 1
  }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];
  totalAmount: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    const apiUrl = 'https://koajstoreapi.onrender.com/api/cart/user/1';

    this.http.get(apiUrl).subscribe((response: any) => {
      this.cartItems = response;
      this.totalAmount = this.getTotalAmount();
      console.log(response);
    });
  }

  getTotalAmount(): number {
    let total = 0;

    for (let i = 0; i < this.cartItems.length; i++) {
      total += this.cartItems[i].price;
    }

    return total;
  }
}

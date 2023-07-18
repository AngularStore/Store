import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})

export class ProductPageComponent implements OnInit {
  product: any;
  selectedImage: string = '';
  quantity: number = 1;

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.fetchProduct(productId);
    });
  }

  fetchProduct(productId: string) {
    this.http.get(`https://koajstoreapi.onrender.com/api/products/${productId}`).subscribe((response: any) => {
      this.product = response;
      console.log(this.product);
    });
  }

  selectImage(image: string) {
    this.selectedImage = image;
  }

  addToCart() {
    const cartItem = {
      productId: this.product.id,
      quantity: 1
    };

    this.http.post('https://koajstoreapi.onrender.com/api/cart', cartItem)
      .subscribe((response: any) => {
        console.log('Item added to cart:', response);
        // Aquí puedes agregar lógica adicional, como mostrar una notificación de éxito, actualizar el estado del carrito, etc.
      });
  }

  increaseQuantity() {
    if (this.quantity < this.product.stock)
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
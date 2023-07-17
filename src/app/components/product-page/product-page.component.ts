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
}
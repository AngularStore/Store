import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service/product.service';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';
import { Product, Product2 } from '../product-form/interface';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})


export class ProductFormComponent implements OnInit {

  // I import the interface Product from the file interface.ts
  // help to use the interface to save the petition data
  //
 product: Product = {
    inventoryID: 1,
    productID: 1,
    quantity: 10,
    stockMin: 0,
    stockMax: 200,
    product: {
      productID: 1,
      productName: "Camiseta polo",
      description: "Camiseta polo para hombre, con estampado miniprint, puños en rectilineo y cuello camisero, pechera incluida con tres botones para cierre, cogotera y marquilla tejida, cuenta con una confeccion en tela jersey.",
      price: 25
    }
  };


  constructor(private productService: ProductService) { }

  ngOnInit(): void {
// Do a petiton with getProduct(productID:number) to get the product to update
this.productService.getProduct(1).subscribe(
  (data: any) => {
    this.product = data;
  },
  (error: any) => {
    console.error(error);
  }
);

  }

  updateProduct(): void {
    const productID = this.product.productID;
    this.productService.updateProduct(1, this.product).subscribe(
      (data: any) => {
        console.log('Product updated successfully');
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}

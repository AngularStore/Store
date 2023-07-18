import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service/product.service';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ActivatedRoute } from '@angular/router';
import { Product } from './interface';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})


export class ProductFormComponent implements OnInit {

  //use product interface to initialize product, but don't use values
  // to make that form is empty
product: any = {}


  constructor(private productService: ProductService, ) { }

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
        console.log(data);
        console.log('Product updated successfully');
        this.updateProductName(); // Llamar al método updateProductName después de actualizar el producto
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  updateProductName(): void {
    const productID = this.product.productID;
    this.productService.updateProductName(1, this.product.product).subscribe(
      (data: any) => {
        console.log(this.product.product);
        console.log('Product updated successfully');
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

}
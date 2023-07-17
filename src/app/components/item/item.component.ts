import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.interface';
import { ProductService } from 'src/app/product.service/product.service';
import { MatFormFieldModule } from '@angular/material/form-field';

export class ItemComponent implements OnInit {
  @Input() product!: Product;
  productForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      productName: [this.product.productName, Validators.required],
      description: [this.product.description, Validators.required],
      price: [this.product.price, Validators.required],
      productImages: this.formBuilder.array(
        this.product.productImages.map(image => this.createImageFormGroup(image))
      )
    });
  }

  createImageFormGroup(image:any): FormGroup {
    return this.formBuilder.group({
      imageID: [image.imageID, Validators.required],
      productID: [image.productID, Validators.required],
      isFront: [image.isFront.toString(), Validators.required],
      imageURL: [image.imageURL, Validators.required]
    });
  }

  editProduct() {
    if (this.productForm.valid) {
      const updatedProduct = this.productForm.value;
      this.productService.updateProduct(this.product.productID, updatedProduct).subscribe(
        (response: any) => {
          console.log('Producto actualizado:', response);
        },
        (error: any) => {
          console.error('Error al actualizar el producto:', error);
        }
      );
    }
  }

  addProduct() {
    if (this.productForm.valid) {
      const newProduct = this.productForm.value;
      this.productService.addProduct(newProduct).subscribe(
        (response: any) => {
          console.log('Producto agregado:', response);
        },
        (error: any) => {
          console.error('Error al agregar el producto:', error);
        }
      );
    }
  }
}

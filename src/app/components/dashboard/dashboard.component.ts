import { Component, inject, OnInit } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { ItemComponent } from '../item/item.component';
import { Product } from '../item/product.interface';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/product.service/product.service';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['productName', 'description', 'price'];
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (products: Product[]) => {
        this.products = products;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}

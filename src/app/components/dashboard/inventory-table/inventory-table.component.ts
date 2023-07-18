import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { InventoryTableDataSource, InventoryTableItem } from './inventory-table-datasource';
import { ProductService } from 'src/app/product.service/product.service';

@Component({
  selector: 'app-inventory-table',
  templateUrl: './inventory-table.component.html',
  styleUrls: ['./inventory-table.component.css']
})

export class InventoryTableComponent implements OnInit {
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity', 'stockMin', 'stockMax', 'edit'];
  showDescriptionColumn: boolean = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data: any) => {
        this.dataSource.data = data;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  editProduct(row: any): void {
    // Lógica para editar el producto
    console.log('Edit product', row);
  }

}

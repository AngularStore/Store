import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Shirt {
  name: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-productspage',
  templateUrl: './productspage.component.html',
  styleUrls: ['./productspage.component.css']
})
export class ProductspageComponent implements OnInit {
  shirts: Shirt[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    const url = 'https://koajstoreapi.onrender.com/api/products'; // Reemplaza con la URL real de la API

    this.http.get<Shirt[]>(url).subscribe(
      (data) => {
        this.shirts = data;
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }
}

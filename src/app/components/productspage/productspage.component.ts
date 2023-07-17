import { Component, OnInit } from '@angular/core'; // Importa los módulos Component y OnInit desde @angular/core
import { HttpClient } from '@angular/common/http'; // Importa el módulo HttpClient desde @angular/common/http

 // Reemplaza con la URL real de la API

@Component({ // Define el componente ProductspageComponent
  selector: 'app-productspage', // Selector del componente
  templateUrl: './productspage.component.html', // Plantilla del componente
  styleUrls: ['./productspage.component.css'] // Estilos del componente
})
export class ProductspageComponent implements OnInit { // Clase del componente que implementa OnInit
  shirts: any; // Propiedad shirts que es una matriz de objetos Shirt

  constructor(private http: HttpClient) {} // Constructor del componente con una dependencia HttpClient

  ngOnInit() { // Función que se ejecuta al iniciar el componente
    this.fetchProduct();// Llama a la función para obtener los datos del producto
  }

  fetchProduct() {
    const url = 'https://koajstoreapi.onrender.com/api/products';// Función para obtener los datos del producto
    this.http.get(url).subscribe((response: any) => {  // Hace una petición GET a la API                                 /
      this.shirts = response;                        // Asigna la respuesta de la API a la variable 'shirts'
    });
  }
}
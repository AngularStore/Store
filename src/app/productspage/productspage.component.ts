import { Component, OnInit } from '@angular/core'; // Importa los módulos Component y OnInit desde @angular/core
import { HttpClient } from '@angular/common/http'; // Importa el módulo HttpClient desde @angular/common/http

interface Shirt { // Define una interfaz llamada Shirt
  name: string; // Propiedad name de tipo string
  price: number; // Propiedad price de tipo number
  imageURL: string; // Propiedad image de tipo string
}

@Component({ // Define el componente ProductspageComponent
  selector: 'app-productspage', // Selector del componente
  templateUrl: './productspage.component.html', // Plantilla del componente
  styleUrls: ['./productspage.component.css'] // Estilos del componente
})
export class ProductspageComponent implements OnInit { // Clase del componente que implementa OnInit
  shirts: Shirt[] = []; // Propiedad shirts que es una matriz de objetos Shirt

  constructor(private http: HttpClient) {} // Constructor del componente con una dependencia HttpClient

  ngOnInit() { // Método ngOnInit que se ejecuta cuando el componente se inicia
    this.getDataFromAPI(); // Llama al método getDataFromAPI para obtener datos de la API
  }

  getDataFromAPI() { // Método para obtener datos de la API
    const url = 'https://koajstoreapi.onrender.com/api/products'; // Reemplaza con la URL real de la API

    this.http.get<Shirt[]>(url).subscribe( // Realiza una solicitud GET a la API y suscribe a la respuesta
      (data) => { // Función de callback para la respuesta exitosa
        this.shirts = data; // Asigna los datos recibidos a la propiedad shirts
      },
      (error) => { // Función de callback para el manejo de errores
        console.error('Error al obtener los datos:', error); // Muestra un mensaje de error en la consola
      }
    );
  }
}

import { Component } from '@angular/core'; // Importa la clase Component del módulo @angular/core

@Component({ //decorador de componente
  selector: 'app-productspage', // Selector del componente
  templateUrl: './productspage.component.html', // Ruta de la plantilla HTML asociada al componente
  styleUrls: ['./productspage.component.css'] // Ruta de la hoja de estilos CSS asociada al componente
})
export class ProductspageComponent { // Clase del componente
  shirts = [ // Arreglo de objetos que representa las camisetas
    { name: 'Shirt 2', description: 'Description 2', price: 200 , image: '../../assets/shirt1.jpg'}, //name representa el nombre del item, description la descripcion del item, price el precio e image la ruta de la imagen
    { name: 'Shirt 1', description: 'Description 1', price: 100 , image: '../../assets/shirt1.jpg'},//name representa el nombre del item, description la descripcion del item, price el precio e image la ruta de la imagen
    { name: 'Shirt 3', description: 'Description 3', price: 300 , image: '../../assets/shirt1.jpg' },//name representa el nombre del item, description la descripcion del item, price el precio e image la ruta de la imagen
    { name: 'Shirt 4', description: 'Description 4', price: 400 , image: '../../assets/shirt1.jpg' },//name representa el nombre del item, description la descripcion del item, price el precio e image la ruta de la imagen
    { name: 'Shirt 5', description: 'Description 5', price: 500 , image: '../../assets/shirt1.jpg' },//name representa el nombre del item, description la descripcion del item, price el precio e image la ruta de la imagen
    { name: 'Shirt 6', description: 'Description 6', price: 600 , image: '../../assets/shirt1.jpg' },//name representa el nombre del item, description la descripcion del item, price el precio e image la ruta de la imagen
    { name: 'Shirt 7', description: 'Description 7', price: 700 , image: '../../assets/shirt1.jpg' },//name representa el nombre del item, description la descripcion del item, price el precio e image la ruta de la imagen
    { name: 'Shirt 8', description: 'Description 8', price: 800 , image: '../../assets/shirt1.jpg' },//name representa el nombre del item, description la descripcion del item, price el precio e image la ruta de la imagen
    { name: 'Shirt 9', description: 'Description 9', price: 900 , image: '../../assets/shirt1.jpg' },//name representa el nombre del item, description la descripcion del item, price el precio e image la ruta de la imagen
    { name: 'Shirt 10', description: 'Description 10', price: 101 , image: '../../assets/shirt1.jpg' },//name representa el nombre del item, description la descripcion del item, price el precio e image la ruta de la imagen
  ];
}

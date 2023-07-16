import { Component } from '@angular/core';

@Component({
  selector: 'app-productspage',
  templateUrl: './productspage.component.html',
  styleUrls: ['./productspage.component.css']
})
export class ProductspageComponent {
  shirts = [
    { name: 'Shirt 1', description: 'Description 1', Price: 100 , image: '../../assets/images/shirt1.jpg'},
    { name: 'Shirt 2', description: 'Description 2', Price: 200 , image: '../../assets/images/shirt1.jpg'},
    { name: 'Shirt 3', description: 'Description 3', Price: 300 , image: '../../assets/images/shirt1.jpg' },
    { name: 'Shirt 4', description: 'Description 4', Price: 400 , image: '../../assets/images/shirt1.jpg' },
    { name: 'Shirt 5', description: 'Description 5', Price: 500 , image: '../../assets/images/shirt1.jpg' },
    { name: 'Shirt 6', description: 'Description 6', Price: 600 , image: '../../assets/images/shirt1.jpg' },
    { name: 'Shirt 7', description: 'Description 7', Price: 700 , image: '../../assets/images/shirt1.jpg' },
    { name: 'Shirt 8', description: 'Description 8', Price: 800 , image: '../../assets/images/shirt1.jpg' },
    { name: 'Shirt 9', description: 'Description 9', Price: 900 , image: '../../assets/images/shirt1.jpg' },
    { name: 'Shirt 10', description: 'Description 10', Price: 1000 , image: '../../assets/images/shirt1.jpg' },
  ];
}

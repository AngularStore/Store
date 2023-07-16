import { Component, OnInit } from '@angular/core';                // Importa dependencias de Angular 
import { Observable } from 'rxjs';                                // Importa la clase Observable           

@Component({
  selector: 'app-product-page',                                   // Selector del componente
  templateUrl: './product-page.component.html',                   // Template asociado al componente       
  styleUrls: ['./product-page.component.css']                     // Estilos asociados al componente
})
export class ProductPageComponent implements OnInit {
  product: any;                                                   // Variable para almacenar los datos del producto
  selectedImage: string = '';                                     // Nueva propiedad para la imagen seleccionada

  ngOnInit() {
    this.fetchProduct().subscribe((response: any) => {            // Llama al método 'fetchProduct' y se suscribe a la respuesta
      this.product = response;                                    // Asigna la respuesta simulada a la variable 'product'
    });
  }

  fetchProduct(): Observable<any> {
    // Simulación de la llamada a la API y la respuesta del producto
    return new Observable(observer => {                           // Crea un nuevo Observable
      const product = {                                           // Crea un objeto con los datos del producto
        name: 'Producto de ejemplo Koaj',                         // Nombre del producto             
        description: 'Que le vaya bien ingeniero',                // Descripción del producto     
        price: 300,                                               // Precio del producto               
        mainImage: 'https://cdn.koaj.co/162992-thickbox_default/pantalon-super-slim-chino-en-drill.jpg',  // Imagen principal del producto
        images: [                                                 // Imágenes del producto             
          'https://cdn.koaj.co/162993-thickbox_default/pantalon-super-slim-chino-en-drill.jpg',
          'https://cdn.koaj.co/162994-thickbox_default/pantalon-super-slim-chino-en-drill.jpg',
          'https://cdn.koaj.co/162995-thickbox_default/pantalon-super-slim-chino-en-drill.jpg'
        ]
      };

      // Simula un retardo de 1 segundo antes de devolver la respuesta
      setTimeout(() => {                                          // Simula un retardo de 1 segundo             
        observer.next(product);                                   // Devuelve la respuesta del producto
        observer.complete();                                      // Finaliza el Observable         
      }, 1000);                                                   // Tiempo de retardo en milisegundos
    }); 
  }

  selectImage(image: string) {                                    // Método para seleccionar una imagen             
    this.selectedImage = image;                                   // Asigna la imagen seleccionada a la variable 'selectedImage'
  } 

}
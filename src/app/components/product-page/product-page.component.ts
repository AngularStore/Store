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
        name: 'Camiseta polo tela jersey estampada con cuello tejido.',                         // Nombre del producto             
        description: 'Camiseta polo para hombre, con estampado miniprint, puños en rectilineo y cuello camisero, pechera incluida con tres botones para cierre, cogotera y marquilla tejida, cuenta con una confeccion en tela jersey. Esta prenda tiene un diseño versátil que complementará tus looks en todas tus salidas con amigos.',                // Descripción del producto     
        price: 59900,                                               // Precio del producto               
        mainImage: 'https://cdn.koaj.co/167554-thickbox_default/camiseta-polo-tela-jersey-estampada-con-cuello-tejido.jpg',  // Imagen principal del producto
        images: [                                                 // Imágenes del producto             
          'https://cdn.koaj.co/167555-thickbox_default/camiseta-polo-tela-jersey-estampada-con-cuello-tejido.jpg',
          'https://cdn.koaj.co/167556-thickbox_default/camiseta-polo-tela-jersey-estampada-con-cuello-tejido.jpg',
          'https://cdn.koaj.co/167557-thickbox_default/camiseta-polo-tela-jersey-estampada-con-cuello-tejido.jpg'
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
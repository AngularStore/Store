import { Component, OnInit } from '@angular/core';                // Importa dependencias de Angular         
import { HttpClient } from '@angular/common/http';                // Importa la clase HttpClient

@Component({                                                      // Decorador Component                     
  selector: 'app-product-page',                                   // Selector del componente para ser usado en el HTML       
  templateUrl: './product-page.component.html',                   // Ruta del archivo HTML
  styleUrls: ['./product-page.component.css']                     // Ruta del archivo CSS
})

export class ProductPageComponent implements OnInit {             // Exporta la clase ProductPageComponent e implementa la interfaz OnInit para inicializar el componente al cargar la página
  product: any;                                                   // Variable para almacenar los datos del producto obtenidos de la API de Koaj
  selectedImage: string = '';                                     // Inicializa selectedImage con un valor predeterminado vacío
  quantity: number = 1;                                           // Inicializa quantity con un valor predeterminado de 1

  constructor(private http: HttpClient) {}                        // Inicializa la clase HttpClient para hacer peticiones HTTP           

  ngOnInit() {                                                    // Función que se ejecuta al iniciar el componente
    this.fetchProduct();                                          // Llama a la función para obtener los datos del producto
  }

  fetchProduct() {                                                // Función para obtener los datos del producto                    
    const productId = '1';                                        // ID del producto a obtener

    this.http.get(`https://koajstoreapi.onrender.com/api/products/${productId}`).subscribe((response: any) => {  // Hace una petición GET a la API
      this.product = response;                                    // Asigna la respuesta de la API a la variable 'product'
      console.log(this.product);                                  // Imprime en consola los datos del producto
    });
  }

  selectImage(image: string) {                                    // Función para seleccionar una imagen del producto
    this.selectedImage = image;                                   // Asigna la imagen seleccionada a la variable 'selectedImage'
  }

  addToCart() {
    const cartItem = {
      productId: this.product.id,
      quantity: 1
    };

    this.http.post('https://koajstoreapi.onrender.com/api/cart', cartItem)
      .subscribe((response: any) => {
        console.log('Item added to cart:', response);
        // Aquí puedes agregar lógica adicional, como mostrar una notificación de éxito, actualizar el estado del carrito, etc.
      });
  }

  increaseQuantity() {
    if (this.quantity < this.product.stock)
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
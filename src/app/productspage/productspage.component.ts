//aqui importamos los modulos necesarios
import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

//aqui declaramos el componente
@Component({
  selector: 'app-productspage', //aqui declaramos el selector
  templateUrl: './productspage.component.html', //aqui declaramos la ruta del archivo html
  styleUrls: ['./productspage.component.css'] //aqui declaramos la ruta del archivo css
})

//aqui declaramos la clase
export class ProductspageComponent {
  shirts = []; //aqui declaramos la variable que va a contener los datos de la api

  constructor(private http: HttpClient) { } //aqui inyectamos el servicio http

  ngOnInit() { //aqui declaramos el metodo que se ejecuta al iniciar el componente
    this.getDataFromAPI();//aqui llamamos a la funcion que obtiene los datos de la api
  }

  getDataFromAPI() {//aqui declaramos la funcion que obtiene los datos de la api
    const url = 'api'; //aqui ponemos la url de la api

    //aqui hacemos la peticion get a la api, con pipe() podemos encadenar operadores
    this.http.get<any[]>(url).pipe(
      // Agrega el operador map para transformar los datos recibidos
      map((response) => {
        // Realiza cualquier transformación necesaria a los datos recibidos y devuelve el resultado
        return response.map((item) => {
          // Por ejemplo, puedes transformar los datos de cada elemento recibido
          return {
            name: item.name.toUpperCase(),
            price: item.price,
            image: item.image
          };
        });
      }),//aqui hacemos la peticion get a la api, con pipe() podemos encadenar operadores
      catchError((error: HttpErrorResponse) => {
        // Manejo de errores
        console.error('Error:', error);
        return throwError('Se produjo un error al obtener los datos.');
      })
    ).subscribe(
      (data) => {
        this.shirts = data;
      },
      (error) => {
        // Manejo de errores si la solicitud falla
        console.error('Error:', error);
      }
    );
  }
}

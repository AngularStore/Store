//Se importa @component de angular.
import { Component } from '@angular/core';

//Se crea el componente de angular.
@Component({
  //Se definen las propiedades del componente.
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
//Se exporta la clase del componente.
export class NavComponent {
  //Se crea una variable para el logo.
  logo:string = '../../../assets/nav/img/koaj.png';

  //Se crea un bool para el navbar.
  public showNavbar:boolean = false;

  //Función para mostrar el navbar responsive.
  public toggleNavbar(): void {
    //Se define valor a mostrar: solo true o false.
    this.showNavbar = !this.showNavbar;
    //Mostrar en consola el valor seleccionado.
    console.log(this.showNavbar);
  }

}

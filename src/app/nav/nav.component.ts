import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  logo:string = '../../assets/nav/img/koaj.png';

  public showNavbar = false;

  public toggleNavbar(): void {
    this.showNavbar = !this.showNavbar;
  }

}

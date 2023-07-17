import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  Items() {
    let ar = []
    let obj :{
      img: string,
      name: string,
      price: number
    } = {
      img: '',
      name: '',
      price: 1
    }
    for(let i=0;i < 10;i++){
      obj.img = 'https://cdn.koaj.co/84381-thickbox_default/camisa-estampada-manga-larga.jpg'
      obj.name = `product-${i+1}`
      obj.price = 25000
      ar.push(obj)
    }
    return ar
  }
  products = this.Items()
  Total() {
    let t:number = 0
    for(let i=0;i < this.products.length;i++){
      t += this.products[i].price
    }
    return t
  }
  totalAmount: number = this.Total()
  
  
}

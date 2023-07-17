import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const BASE_URL = 'https://koajstoreapi.onrender.com'; // URL API


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    const url = `${BASE_URL}/api/products`;
    return this.http.get(url);
  }

  updateProduct(productId: number, updatedProduct: any): Observable<any> {
    const url = `${BASE_URL}/api/products/${productId}`;
    return this.http.put(url, updatedProduct);
  }

  addProduct(newProduct: any): Observable<any> {
    const url = `${BASE_URL}/api/products`;
    return this.http.post(url, newProduct);
  }

}

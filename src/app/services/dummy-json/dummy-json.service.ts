import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products, Categories, Categorie } from '../../models/dummy.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DummyJsonService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Products> {
    return this.http.get<Products>('https://dummyjson.com/products');
  }
  
  getAllCategories() {
    return this.http.get<Categorie>('https://dummyjson.com/products/categories');
  }

  getProductByCaterogie() {
  }
}

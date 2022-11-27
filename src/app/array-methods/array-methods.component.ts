import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Categorie, Products } from '../models/dummy.model';
import { DummyJsonService } from '../services/dummy-json/dummy-json.service';

interface Detail { type: 'rating' | 'price' | 'category'}

@Component({
  selector: 'app-array-methods',
  templateUrl: './array-methods.component.html',
  styleUrls: ['./array-methods.component.css']
})
export class ArrayMethodsComponent implements OnInit {
  // optionsDetails = ['rating', 'price', 'category', 'rata'];
  // products!: Products;
  // categories!: Categorie;

  array: number[] = [1,2,3,4,5,6,7];

  constructor(private dummyService: DummyJsonService) { 
  }
  
  ngOnInit(): void {
    // this.getAllCategories();
  }

  // getAllProductsByDetail(detail: string, value: number | string) {
    // this.dummyService.getAllProducts()
        // .pipe(
          // tap(()=> this.products = {} as Products ),
          // filter(()=> this.optionsDetails.includes(detail.toLowerCase()) ),
          // map(({products}) => {
            // return (detail === 'rating' || detail === 'price' || detail === 'category') &&
                // products.filter(product => product[detail] > value )
          // }),
        // )
        // .subscribe(products=> console.log(products));
  // }
// 
  // getAllCategories() {
    // this.dummyService.getAllCategories()
        // .subscribe({
          // next: (categories) => this.categories = categories
        // })
  // }
// 
  // getProductsByCategorie(categorie: string) {
// 
  // }
// 
  // loadData(value: string, type: string) {
    // console.log(value, type)
  // }

  getArrayFiltrado() {
    return this.array.filter(n=>n <5);
  }

  insertAtTheBeginning(){
    const arrAux = [...this.array];
    arrAux.unshift(0);

    return arrAux;
  }

  lookForPosition() {
    return this.array.at(-1)
  }

  get entries() {
    return this.array.entries();
  }

  get slice() {
    return this.array.slice(2)
  }

  get splice() {
    const arrAux = [...this.array];
    arrAux.splice(3,1);      
    return arrAux
  }

  get reduce() {
    return this.array.reduce((acc,current)=>acc+current);
  }

  get reduceWithInitial() {
    return this.array.reduce((acc,current)=>acc+current, 45);
  }

  
}

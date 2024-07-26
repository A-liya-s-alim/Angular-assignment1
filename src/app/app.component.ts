// import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Component, OnInit, SimpleChange, ɵɵNgOnChangesFeature } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {  CardListComponent } from "./ui/cardlist/cardlist.component";
import { CardsComponent } from "./ui/card/card.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsComponent, CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'prodcut-app'
}
 
//   export class AppComponent implements  OnInit {
 
   
//     // list:any;
//    products: any[] = []; // Property to hold the list of products
   
//    async ngOnInit(): Promise<void> {
//      try {
//        const response = await fetch('https://dummyjson.com/products');
//        const data = await response.json();
//        this.products = data.products; // Store the data in the property
//      } catch (error) {
//        console.error('Error fetching data:', error);
//      }
//    }
   
 
// }
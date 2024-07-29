// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-card',
//   standalone: true,
//   imports: [],
//   templateUrl: './card.component.html',
//   styleUrl: './card.component.css'
// })
// export class CardComponent {
//   @Input() cardDetails: MyInterface = {
//     title: 'Card Title',
//     description: 'Card Description',
//     images: ['https://picsum.photos/200/300']
//   };
// }
 
// // Moved interface declaration outside of the component
// interface MyInterface {
//   title: string;
//   description: string;
//   images: Array<string>;
// }
import { Component, EventEmitter, Input ,Output} from '@angular/core';
import { Product } from '../../interface/product.interface'
import { NgOptimizedImage } from '@angular/common';


@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardsComponent {
  @Input() product: Product = {
    id: 0,
    title: " ",
    description: "",
    thumbnail:"",
    category: ""
  };
  @Output() myEvent = new EventEmitter<number>()
  emitEvent(){
    this.myEvent.emit(this.product.id)
  }
}

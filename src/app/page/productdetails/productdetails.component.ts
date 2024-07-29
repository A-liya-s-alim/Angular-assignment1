// import { Component } from '@angular/core';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-productdetails',
//   standalone: true,
//   imports: [],
//   templateUrl: './productdetails.component.html',
//   styleUrl: './productdetails.component.css'
// })
// export class ProductdetailsComponent {
//   constructor(private router: Router) { }
 
//   navigateToAbout() {
//     this.router.navigate(['/productdetails']);
// }
// }
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsComponent } from '../../ui/card/card.component';

 
@Component({
  selector: 'app-district',
  standalone: true,
  imports: [NgIf,CardsComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
 
    id!: number;
  productName:any[]=[];
  constructor(private route:ActivatedRoute){}
   
  ngOnInit():void{
    this.route.paramMap.subscribe(params=>{
      const idParam=params.get('id');
      if(idParam){
        this.id=+idParam;
        console.log("Detail Component ID:", this.id);
        this.fetchDetails(this.id);
          }else{
            console.error("ID param is missing!");
          }
    });
    this.getData();
  }
  fetchDetails(id: number): void {
   
    console.log('Fetching details for ID:', id);
   
  }
   
  async getData(): Promise<void> {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      this.productName = data.products;
      console.log('Fetched data:', this.productName);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
   
  logId(id: number): void {
    console.log('Product ID:', id);
  }
   
  }
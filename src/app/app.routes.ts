import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductdetailsComponent } from './page/productdetails/productdetails.component';



export const routes: Routes = [
    {
        path:'',component:HomeComponent

    }, 
    {
        path:'contact',component:ContactComponent
    },
    {
        // path:'login' ,component:LoginComponent
        path:'login',loadComponent: ()=>import('./pages/login/login.component').then((m)=> m.LoginComponent)
    },
    {
        path:'productdetails/:id',component:ProductdetailsComponent
    }

];

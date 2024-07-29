import { DatePipe, SlicePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightDirective } from '../../highlight.directive';
import { CardsComponent } from "../../ui/card/card.component";
import { CardListComponent } from "../../ui/cardlist/cardlist.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [UpperCasePipe, SlicePipe, DatePipe, HighlightDirective, CardsComponent, CardListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  today: number = Date.now();
}

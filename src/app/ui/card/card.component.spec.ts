import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

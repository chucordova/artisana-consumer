import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartAndAdsComponent } from './cart-and-ads.component';

describe('CartAndAdsComponent', () => {
  let component: CartAndAdsComponent;
  let fixture: ComponentFixture<CartAndAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartAndAdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartAndAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

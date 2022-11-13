import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingProfileComponent } from './billing-profile.component';

describe('BillingProfileComponent', () => {
  let component: BillingProfileComponent;
  let fixture: ComponentFixture<BillingProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

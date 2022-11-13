import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingLogComponent } from './billing-log.component';

describe('BillingLogComponent', () => {
  let component: BillingLogComponent;
  let fixture: ComponentFixture<BillingLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillingLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillingLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

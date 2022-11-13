import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecurringBillingInvoicePreviewComponent } from './recurring-billing-invoice-preview.component';

describe('RecurringBillingInvoicePreviewComponent', () => {
  let component: RecurringBillingInvoicePreviewComponent;
  let fixture: ComponentFixture<RecurringBillingInvoicePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecurringBillingInvoicePreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecurringBillingInvoicePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

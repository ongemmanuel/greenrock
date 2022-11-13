import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recurring-billing-invoice-preview',
  templateUrl: './recurring-billing-invoice-preview.component.html',
  styleUrls: ['./recurring-billing-invoice-preview.component.scss']
})
export class RecurringBillingInvoicePreviewComponent implements OnInit {
  public months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public years = [2020, 2021, 2022, 2023, 2024];
  public days = [1, 2, 3, 4, 5];
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'payment-methods',
  templateUrl: './payment-methods.component.html',
  styleUrls: ['./payment-methods.component.scss']
})
export class PaymentMethodsComponent implements OnInit {
  public paymentMethods = ['Credit/Debit cards', 'ACH accounts'];
  public selectedTab = '';

  public cardData = [
    { name: 'John Doe', number: 123456, cardType: 'visa' },
    { name: 'Jane Dee', number: 654321, cardType: 'amex' },
  ]

  public achData = [
    { name: 'John Doe', number: 123456 },
    { name: 'Jane Dee', number: 654321 },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public switchTab(event: any) {
    this.selectedTab = event;
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'billing-profile',
  templateUrl: './billing-profile.component.html',
  styleUrls: ['./billing-profile.component.scss']
})
export class BillingProfileComponent implements OnInit {



  public billingProfileData = {
    name: 'Goldman Sachs',
    number: 'Visa 123456',
    recurringBilling: ['On', 'Off'],
    billingDay: [0]
  }

  constructor() { }

  ngOnInit(): void {
    this.billingProfileData.billingDay = [];
    for (let i = 1; i < 31; i++) {
      this.billingProfileData.billingDay.push(i)
    }
  }

}

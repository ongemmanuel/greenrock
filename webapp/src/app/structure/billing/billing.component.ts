import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit {
  public id: string = "";
  public tabs = ['All Invoices', 'Recurring Billing/Invoice Preview'];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  public switchTab(event: any) {
    this.router.navigate([event], { relativeTo: this.activatedRoute });
  }

}

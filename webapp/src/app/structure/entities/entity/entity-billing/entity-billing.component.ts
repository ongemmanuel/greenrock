import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'entity-billing',
  templateUrl: './entity-billing.component.html',
  styleUrls: ['./entity-billing.component.scss']
})
export class EntityBillingComponent implements OnInit {

  public entityBillingTabs = ['Invoices', 'Payment Methods', 'Billing Profile', 'Billing Log']

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  public switchTab(event: any) {
    this.router.navigate([event], {relativeTo: this.activatedRoute});
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  public actions = ['Settings', 'Properties', 'Tasks']

  public services = [
    { serviceName: 'Sales Tax'},
    { serviceName: 'Returns'},
    { serviceName: 'Payroll'},
    { serviceName: 'Yearly Filing'},
    { serviceName: 'Bookkeeping'},
    { serviceName: 'Quickbooks'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

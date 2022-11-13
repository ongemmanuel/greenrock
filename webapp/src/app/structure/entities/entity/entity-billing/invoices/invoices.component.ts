import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.scss']
})
export class InvoicesComponent implements OnInit {

  constructor() { }

  public month = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public status = ['All', 'Active', 'Inactive'];
  public year = ['All', 2020, 2021, 2022];
  public invoiceData = [
    { invoiceNumber: 'GRI-20221223-001', amount: 100, lastModified: new Date('2022-12-23'), status: 'Admin' },
    { invoiceNumber: 'GRI-20221224-002', amount: 200, lastModified: new Date('2022-12-24'), status: 'User' },
    { invoiceNumber: 'GRI-20221225-003', amount: 300, lastModified: new Date('2022-12-25'), status: 'Guest' }
  ]

  ngOnInit(): void {
  }

}

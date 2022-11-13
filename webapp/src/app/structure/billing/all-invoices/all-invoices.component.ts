import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'all-invoices',
  templateUrl: './all-invoices.component.html',
  styleUrls: ['./all-invoices.component.scss']
})
export class AllInvoicesComponent implements OnInit {
  public entitiesData = ['Entity 1', 'Entity 2', 'Entity 3', 'Entity 4', 'Entity 5', 'Entity 6', 'Entity 7'];
  public servicesData = ['Book Keeping', 'Sales Tax'];
  public statusData = ['Active', 'Inactive'];
  public months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public years = [2020, 2021, 2022, 2023, 2024];
  public invoice = [1, 2, 3, 4, 5, 6, 7]; 
  public invoiceTotal = 15000;

  public invoiceData = [
    { entityName: 'Entity 1', invoiceNumber: 1, associatedServices: 'Book Keeping 200', invoiceTitle: 'Title One', amount: 100, lastModified: new Date('2023-12-23') },
    { entityName: 'Entity 2', invoiceNumber: 2, associatedServices: 'Book Keeping 200', invoiceTitle: 'Title Two', amount: 200, lastModified: new Date('2023-12-23') },
    { entityName: 'Entity 3', invoiceNumber: 3, associatedServices: '', invoiceTitle: 'Title One', amount: 1005, lastModified: new Date('2023-12-23')},
    { entityName: 'Entity 4', invoiceNumber: 4, associatedServices: 'Sales Tax 100', invoiceTitle: 'Title One', amount: 1200, lastModified: new Date('2023-12-23') },
    { entityName: 'Entity 5', invoiceNumber: 5, associatedServices: 'Book Keeping 200', invoiceTitle: 'Title Two', amount: 14400, lastModified: new Date('2023-12-23')},
    { entityName: 'Entity 6', invoiceNumber: 6, associatedServices: '',invoiceTitle: 'Title Two', amount: 10, lastModified: new Date('2023-12-23') },
    { entityName: 'Entity 7', invoiceNumber: 7, associatedServices: 'Book Keeping 200', invoiceTitle: 'Title One', amount: 22100, lastModified: new Date('2023-12-23')},
  ];

  public displayTimeColumns = ['lastModified'];
  public displayNumericDateColumns = ['lastModified'];

  constructor() { }

  ngOnInit(): void {
  }

}

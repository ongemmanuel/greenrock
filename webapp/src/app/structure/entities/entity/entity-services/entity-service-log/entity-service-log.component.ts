import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'entity-service-log',
  templateUrl: './entity-service-log.component.html',
  styleUrls: ['./entity-service-log.component.scss']
})
export class EntityServiceLogComponent implements OnInit {

  constructor() { }

  public dropdownStatus = ['Complete', 'Pending', 'Closed'];

  public isOpen: boolean = true;
  public selectedYear: number = 0;
  public navYears: any;
  public months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public selectedLogData: any;

  public logData = [
    {
      year: 2020, month: 11, tableData: [
        { name: 'Calculation Report Nov2020', status: 'Complete', history: true, timer: true, sendNotif: true },
        { name: 'Client Approval Nov2020', status: 'Pending', history: false, timer: true, sendNotif: true },
        { name: 'Report & Payment Submittal Nov2020', status: 'Pending', history: false, timer: true, sendNotif: true },
      ]
    },
    {
      year: 2020, month: 10, tableData: [
        { name: 'Calculation Report Oct2020', status: 'Complete', history: true, timer: true, sendNotif: true },
        { name: 'Client Approval Oct2020', status: 'Pending', history: false, timer: true, sendNotif: true },
        { name: 'Report & Payment Submittal Oct2020', status: 'Pending', history: false, timer: true, sendNotif: true },
      ]
    },
    {
      year: 2020, month: 12, tableData: [
        { name: 'Calculation Report Dec2020', status: 'Complete', history: true, timer: true, sendNotif: true },
        { name: 'Client Approval Dec2020', status: 'Pending', history: false, timer: true, sendNotif: true },
        { name: 'Report & Payment Submittal Dec2020', status: 'Pending', history: false, timer: true, sendNotif: true },
      ]
    },
    {
      year: 2021, month: 1, tableData: [
        { name: 'Calculation Report Jan2021', status: 'Complete', history: true, timer: true, sendNotif: true },
        { name: 'Client Approval Jan2021', status: 'Pending', history: false, timer: true, sendNotif: true },
        { name: 'Report & Payment Submittal Jan2021', status: 'Pending', history: false, timer: true, sendNotif: true },
      ]
    },
    {
      year: 2021, month: 2, tableData: [
        { name: 'Calculation Report Feb2021', status: 'Complete', history: true, timer: true, sendNotif: true },
        { name: 'Client Approval Feb2021', status: 'Pending', history: false, timer: true, sendNotif: true },
        { name: 'Report & Payment Feb2021', status: 'Pending', history: false, timer: true, sendNotif: true },
      ]
    },
    {
      year: 2021, month: 3, tableData: [
        { name: 'Calculation Report Mar2021', status: 'Complete', history: true, timer: true, sendNotif: true },
        { name: 'Client Approval Mar2021', status: 'Pending', history: false, timer: true, sendNotif: true },
        { name: 'Report & Payment Submittal Mar2021', status: 'Pending', history: false, timer: true, sendNotif: true },
      ]
    },
    {
      year: 2022, month: 7, tableData: [
        { name: 'Calculation Report Jul2022', status: 'Complete', history: true, timer: true, sendNotif: true },
        { name: 'Client Approval Jul2022', status: 'Pending', history: false, timer: true, sendNotif: false },
        { name: 'Report & Payment Submittal Jul2022', status: 'Pending', history: false, timer: true, sendNotif: true },
      ]
    },
    {
      year: 2022, month: 9, tableData: [
        { name: 'Calculation Report Sep2022', status: 'Complete', history: true, timer: true, sendNotif: true },
        { name: 'Client Approval Sep2022', status: 'Pending', history: false, timer: true, sendNotif: true },
        { name: 'Report & Payment Submittal Sep2022', status: 'Pending', history: false, timer: true, sendNotif: true },
      ]
    },
    {
      year: 2022, month: 8, tableData: [
        { name: 'Calculation Report Aug2022', status: 'Complete', history: true, timer: true, sendNotif: true },
        { name: 'Client Approval Aug2022', status: 'Pending', history: false, timer: true, sendNotif: false },
        { name: 'Report & Payment Aug2022', status: 'Pending', history: false, timer: true, sendNotif: true },
      ]
    },
  ]

  public toggle(navYear: any) {
    navYear.opened = !navYear.opened;
  }

  ngOnInit(): void {
    const years = this.logData.map(value => value.year);
    const uniqueYears = [...new Set(years)];
    // const uniqueYears = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008];
    this.navYears = uniqueYears.map(value => ({ year: value, opened: false }))
  }

  public openServiceLog(logData: any) {
    this.selectedLogData = logData;
  }

}

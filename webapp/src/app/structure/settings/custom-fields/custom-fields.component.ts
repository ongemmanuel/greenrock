import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-fields',
  templateUrl: './custom-fields.component.html',
  styleUrls: ['./custom-fields.component.scss']
})
export class CustomFieldsComponent implements OnInit {

  public inputTypes = ['Text', 'Long-text', 'Multi-select', 'Numeric'];

  public customFieldsData = [
    { customField: 'Account Number', inputType: 'Text', tag: '{ACCOUNT NUMBER}', uploadSupport: new Date('2023-12-23') },
    { customField: 'Additional Notes', inputType: 'Long-text',  tag: '{ADDITIONAL NOTES}', uploadSupport: new Date('2023-12-23') },
    { customField: 'Assigned Users', inputType: 'Multi-select', tag: '{ASSIGNED USERS}', uploadSupport: new Date('2023-12-23') },
    { customField: 'Bank Statements', inputType: 'Multi-select', tag: '{BANK STATEMENTS}', uploadSupport: new Date('2023-12-23') },
    { customField: 'Certificate Number', inputType: 'Numeric', tag: '{CERTIFICATE NUMBER}', uploadSupport: new Date('2023-12-23') },
    { customField: 'City', inputType: 'Text', tag: '{CITY}', uploadSupport: new Date('2023-12-23') }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

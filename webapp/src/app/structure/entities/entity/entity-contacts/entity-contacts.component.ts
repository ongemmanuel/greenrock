import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'entity-contacts',
  templateUrl: './entity-contacts.component.html',
  styleUrls: ['./entity-contacts.component.scss']
})
export class EntityContactsComponent implements OnInit {

  public entityContacts: any = [
    { name: 'John Doe' },
    { name: 'Jane Dee' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

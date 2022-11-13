import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'entity-officers',
  templateUrl: './entity-officers.component.html',
  styleUrls: ['./entity-officers.component.scss']
})
export class EntityOfficersComponent implements OnInit {


  public officerData = [
    { officerName: 'John Doe'},
    { officerName: 'Jane Dee'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

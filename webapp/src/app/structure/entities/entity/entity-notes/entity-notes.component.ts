import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'entity-notes',
  templateUrl: './entity-notes.component.html',
  styleUrls: ['./entity-notes.component.scss']
})
export class EntityNotesComponent implements OnInit {
  public notesData = [
    {
      notes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut labore et dolore magna aliqua.',
      name: 'Guy Hawkings',
      date: new Date('2022-12-23T03:24:00'),
      status: 'Active'
    },
    {
      notes: 'sed do eiusmod tempor incididunt',
      name: 'Savannah Nguyen',
      date: new Date('2022-12-24T04:24:00'),
      status: 'Active'
    },
    {
      notes: ' consectetur adipiscing labore et dolore magna aliqua.',
      name: 'Eleanor Pena',
      date: new Date('2022-12-25T05:24:00'),
      status: 'Active'
    }
  ]

  public timeColumns = ['date'];

  constructor() { }

  ngOnInit(): void {
  }

}

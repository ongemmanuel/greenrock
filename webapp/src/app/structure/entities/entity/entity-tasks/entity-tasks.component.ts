import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'entity-tasks',
  templateUrl: './entity-tasks.component.html',
  styleUrls: ['./entity-tasks.component.scss']
})
export class EntityTasksComponent implements OnInit {
  public statusData = ['Issued', 'To Review', 'Completed', 'Cancelled'];

  public taskData = [
    { task: 'Task 1', priority: 1, issuedBy: 'Guy Hawkings', issuedOn: new Date('2022-12-23T03:24:00'), deadline: new Date('2023-12-23'), assignedTo: 'Bookkeeper One', workStatus: 'Issued' },
    { task: 'Task 3', priority: 2,issuedBy: 'Marvin McKinney', issuedOn: new Date('2022-12-29T03:24:00'), deadline: new Date('2023-12-23'), assignedTo: 'Bookkeeper Two', workStatus: 'To Review' },
    { task: 'Task 5', priority: 1,issuedBy: 'Floyd Miles', issuedOn: new Date('2022-12-28T03:24:00'), deadline: new Date('2023-12-23'), assignedTo: 'Bookkeeper Four', workStatus: 'Issued' },
    { task: 'Task 16', priority: 3, issuedBy: 'Brooklyn Simmons', issuedOn: new Date('2022-12-27T03:24:00'), deadline: new Date('2023-12-23'), assignedTo: 'Bookkeeper One', workStatus: 'Done' },
    { task: 'Task 8', priority: 2, issuedBy: 'Jacob Jones', issuedOn: new Date('2022-12-26T03:24:00'), deadline: new Date('2023-12-23'), assignedTo: 'Bookkeeper Two', workStatus: 'Completed' },
    { task: 'Task 4', priority: 1, issuedBy: 'Devon Lane', issuedOn: new Date('2022-12-25T03:24:00'), deadline: new Date('2023-12-23'), assignedTo: 'Bookkeeper One', workStatus: 'Done' },
    { task: 'Task 2', priority: 1, issuedBy: 'Jenny Wilson', issuedOn: new Date('2022-12-24T03:24:00'), deadline: new Date('2023-12-23'), assignedTo: 'Bookkeeper One', workStatus: 'Cancelled' },
  ];

  public displayTimeColumns = ['issuedOn'];
  public displayNumericDateColumns = ['deadline', 'issuedOn'];

  constructor() { }

  ngOnInit(): void {
  }

}

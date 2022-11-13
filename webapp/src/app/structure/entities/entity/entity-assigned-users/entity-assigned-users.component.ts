import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'entity-assigned-users',
  templateUrl: './entity-assigned-users.component.html',
  styleUrls: ['./entity-assigned-users.component.scss']
})
export class EntityAssignedUsersComponent implements OnInit {
  public assignedUsers = [
    { name: 'John Doe', status: 'Active' },
    { name: 'Jane Dee', status: 'Active' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

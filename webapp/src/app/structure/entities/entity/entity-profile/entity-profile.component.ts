import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'entity-profile',
  templateUrl: './entity-profile.component.html',
  styleUrls: ['./entity-profile.component.scss']
})
export class EntityProfileComponent implements OnInit {

  constructor() { }

  public types = ['Type 1', 'Type 2', 'Type 3'];
  public users = ['User 1', 'User 2', 'User 3'];

  ngOnInit(): void {
  }

}

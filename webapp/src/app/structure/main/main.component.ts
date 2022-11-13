import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public settingsButton: boolean = false;
  constructor() { }

  public navigationValues = [
    'Entities', 'Messages', 'Tasks', 'Reports', 'Billing'
  ]

  public settingsNavigationValues = [
    'General', 'Custom Fields', 'Entity Types', 'Services'
  ]

  ngOnInit(): void {
  }


}

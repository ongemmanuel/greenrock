import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss']
})
export class EntityComponent implements OnInit {


  public tabs = [
    'Company Profile', 'Services', 'Officers', 'Contacts', 'Uploads', 'Billing', 'Assigned Users', 'Notes', 'Tasks'
  ]

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  public switchTab(event: any) {
    console.log(event);
    this.router.navigate([event], {relativeTo: this.activatedRoute});
  }

}

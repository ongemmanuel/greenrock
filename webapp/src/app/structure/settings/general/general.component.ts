import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {
  public id: string = "";
  public tabs = ['Business Information', 'Company Logo', 'Email Settings'];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  public switchTab(event: any) {
    this.router.navigate([event], { relativeTo: this.activatedRoute });
  }

}

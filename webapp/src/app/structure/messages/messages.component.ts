import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  public contactsData = [
    {firstName: 'Peter', lastName: 'Ansel', alias: 'Pete'},
    {firstName: 'Thomas', lastName: 'Bill', alias: 'Thom'},
    {firstName: 'Graham', lastName: 'Stanislave', alias: 'Gra'}
  ]

  public actionColumns = ['SMS History', 'SMS Notification'];
  public isContactDisplayed: boolean = true;
  private contactData: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // if (this.router.url.includes("SMS"))
    //   this.isContactDisplayed = false;
    // else
    //   this.isContactDisplayed = true;
  }

  public proceedAction(event: any) {
    //replace alias with id
    this.isContactDisplayed = false;
    this.contactData = event;
    this.router.navigate([event.data.alias + '/' + event.name], { relativeTo: this.activatedRoute });
  }

  public routeDeactivated() {
    this.isContactDisplayed = true;
  }

  public onOutletLoaded(componentRef: any) {
    this.isContactDisplayed = false;
    if (this.contactData)
      componentRef.contactData = this.contactData.data;
  }

}

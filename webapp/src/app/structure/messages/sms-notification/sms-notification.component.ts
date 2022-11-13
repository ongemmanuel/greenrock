import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sms-notification',
  templateUrl: './sms-notification.component.html',
  styleUrls: ['./sms-notification.component.scss']
})
export class SmsNotificationComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  public smsNotificationData = [
    {
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut labore et dolore magna aliqua.',
      name: 'Guy Hawkings',
      date: new Date('2022-12-23T03:24:00'),
    },
    {
      message: 'sed do eiusmod tempor incididunt',
      name: 'Savannah Nguyen',
      date: new Date('2022-12-24T04:24:00'),
    },
    {
      message: ' consectetur adipiscing labore et dolore magna aliqua.',
      name: 'Eleanor Pena',
      date: new Date('2022-12-25T05:24:00'),
    }
  ]

  @Input()
  public contactData: any;
  public displayData: {firstName: string, lastName: string} = {firstName: '', lastName: ''};

  ngOnInit(): void {
    if (this.contactData)
      this.displayData = this.contactData;
    else {
      // do route snapshop to get id
      this.displayData.firstName = "Test";
      this.displayData.lastName = "Name";
    }

  }

  public returnToMessages() {
    this.router.navigate(['Messages']);
  }

}

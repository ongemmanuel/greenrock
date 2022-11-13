import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'entity-services',
  templateUrl: './entity-services.component.html',
  styleUrls: ['./entity-services.component.scss']
})
export class EntityServicesComponent implements OnInit {
  public tabs = ['Ongoing', 'History'];
  public editServiceTabs = ['Service Log', 'Service Settings', 'Billings And Fees', 'Service Properties'];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }


  ngOnInit(): void {
  }

  public get isRouteServiceEdit() {
    const urlSegment = this.router.url.split('/').pop()?.replaceAll('%20', ' ');
    return urlSegment !== undefined ? this.editServiceTabs.includes(urlSegment) : false;
  }

  public backToOngoingServices() {
    this.router.navigate([this.router.url.split('Services')[0] + 'Services/Ongoing']);
  }

  public switchTab(event: any) {
    this.router.navigate([event], { relativeTo: this.activatedRoute });
  }

  public switchServiceTab(event: any) {
    const baseUrl = this.router.url.split('/').slice(0, -1).join('/')
    this.router.navigate([baseUrl + '/' + event], { relativeTo: this.activatedRoute });
  }

}

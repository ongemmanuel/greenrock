import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'entity-services-ongoing',
  templateUrl: './entity-services-ongoing.component.html',
  styleUrls: ['./entity-services-ongoing.component.scss']
})
export class EntityServicesOngoingComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  public urlNav: string = '';
  

  //add entityServiceInterface
  public data = [
    { serviceName: 'Service1', status: 'active', date: '1 Jan, 2023' },
    { serviceName: 'Service2', status: 'active', date: '2 Jan, 2023' },
    { serviceName: 'Service3', status: 'active', date: '3 Jan, 2023' },
    { serviceName: 'Service4', status: 'inactive', date: '4 Jan, 2023' },
    { serviceName: 'Service5', status: 'inactive', date: '5 Jan, 2023' },
  ]

  ngOnInit(): void {
    this.urlNav = this.router.url.split('/').slice(0, -1).join('/');
  }

  public onSelectEditRow(entityService: any) {
    // use id
    this.router.navigate([this.urlNav + '/' + entityService.serviceName + '/' + 'Service Log']);   
  }

}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'entities-active',
  templateUrl: './entities-active.component.html',
  styleUrls: ['./entities-active.component.scss']
})
export class EntitiesActiveComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  public activeData = [
    { id: 1, entityName: 'Entity1', entityType: 'EntityType1' },
    { id: 2, entityName: 'Entity2', entityType: 'EntityType2' },
    { id: 3, entityName: 'Entity3', entityType: 'EntityType3' },
    { id: 4, entityName: 'Entity4', entityType: 'EntityType4' },
    { id: 5, entityName: 'Entity5', entityType: 'EntityType5' },
  ]

  ngOnInit(): void {
  }

  public navigateToEntity(event: any) {
    this.router.navigate([this.router.url + '/' + event.id], { relativeTo: this.activatedRoute });
  }

}

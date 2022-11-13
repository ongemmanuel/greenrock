import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'entities-inactive',
  templateUrl: './entities-inactive.component.html',
  styleUrls: ['./entities-inactive.component.scss']
})
export class EntitiesInactiveComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  public inactiveData = [
    { id: 1, entityName: 'InactiveEntity1', entityType: 'EntityType1' , entityLocation: 'EntityLoc1'},
    { id: 2, entityName: 'InactiveEntity2', entityType: 'EntityType2' , entityLocation: 'EntityLoc2'},
    { id: 3, entityName: 'InactiveEntity3', entityType: 'EntityType3' , entityLocation: 'EntityLoc3'},
    { id: 4, entityName: 'InactiveEntity4', entityType: 'EntityType4' , entityLocation: 'EntityLoc4'},
    { id: 5, entityName: 'InactiveEntity5', entityType: 'EntityType5' , entityLocation: 'EntityLoc5'},
  ]

  ngOnInit(): void {
  }

  public navigateToEntity(event: any) {
    this.router.navigate([this.router.url + '/' + event.id], { relativeTo: this.activatedRoute });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-entities',
  templateUrl: './entities.component.html',
  styleUrls: ['./entities.component.scss']
})
export class EntitiesComponent implements OnInit {

  public id: string = "";
  public tabs = ['Active', 'Inactive'];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  public activeTable = [
    // { id: 1, entityName: 'Entity1', entityType: 'EntityType1', entityLocation: 'EntityLoc1', entityService: 'EntityService1', entityAdd: 'EntityAdd1', entityClass: 'EntityClass1', entityTotal: 'EntityTotal1', entitySet: 'EntitySet1' },
    // { id: 2, entityName: 'Entity2', entityType: 'EntityType2', entityLocation: 'EntityLoc2', entityService: 'EntityService2', entityAdd: 'EntityAdd2', entityClass: 'EntityClass2', entityTotal: 'EntityTotal2', entitySet: 'EntitySet2' },
    // { id: 3, entityName: 'Entity3', entityType: 'EntityType3', entityLocation: 'EntityLoc3', entityService: 'EntityService3', entityAdd: 'EntityAdd3', entityClass: 'EntityClass3', entityTotal: 'EntityTotal3', entitySet: 'EntitySet3' },
    // { id: 4 ,entityName: 'Entity4', entityType: 'EntityType4', entityLocation: 'EntityLoc4', entityService: 'EntityService4', entityAdd: 'EntityAdd4', entityClass: 'EntityClass4', entityTotal: 'EntityTotal4', entitySet: 'EntitySet4' },
    // { id: 5, entityName: 'Entity5', entityType: 'EntityType5', entityLocation: 'EntityLoc5', entityService: 'EntityService5', entityAdd: 'EntityAdd5', entityClass: 'EntityClass5', entityTotal: 'EntityTotal5', entitySet: 'EntitySet5' },

    { id: 1, entityName: 'Entity1', entityType: 'EntityType1' },
    { id: 2, entityName: 'Entity2', entityType: 'EntityType2' },
    { id: 3, entityName: 'Entity3', entityType: 'EntityType3' },
    { id: 4 ,entityName: 'Entity4', entityType: 'EntityType4' },
    { id: 5, entityName: 'Entity5', entityType: 'EntityType5' },

    // { entityName: 'Entity1 Entity1 Entity1 Entity1 Entity1 Entity1 Entity1 Entity1 Entity1', entityType: 'EntityType1' , entityLocation: 'EntityLoc1'},
    // { entityName: 'Entity2', entityType: 'EntityType2' , entityLocation: 'EntityLoc2'},
    // { entityName: 'Entity3', entityType: 'EntityType3' , entityLocation: 'EntityLoc3'},
    // { entityName: 'Entity4', entityType: 'EntityType4' , entityLocation: 'EntityLoc4'},
    // { entityName: 'Entity5', entityType: 'EntityType5' , entityLocation: 'EntityLoc5'},
    // { entityName: 'Entity2', entityType: 'EntityType2' , entityLocation: 'EntityLoc2'},
    // { entityName: 'Entity3', entityType: 'EntityType3' , entityLocation: 'EntityLoc3'},
    // { entityName: 'Entity4', entityType: 'EntityType4' , entityLocation: 'EntityLoc4'},
    // { entityName: 'Entity5', entityType: 'EntityType5' , entityLocation: 'EntityLoc5'},
    // { entityName: 'Entity2', entityType: 'EntityType2' , entityLocation: 'EntityLoc2'},
    // { entityName: 'Entity3', entityType: 'EntityType3' , entityLocation: 'EntityLoc3'},
    // { entityName: 'Entity4', entityType: 'EntityType4' , entityLocation: 'EntityLoc4'},
    // { entityName: 'Entity5', entityType: 'EntityType5' , entityLocation: 'EntityLoc5'},
    // { entityName: 'Entity2', entityType: 'EntityType2' , entityLocation: 'EntityLoc2'},
    // { entityName: 'Entity3', entityType: 'EntityType3' , entityLocation: 'EntityLoc3'},
    // { entityName: 'Entity4', entityType: 'EntityType4' , entityLocation: 'EntityLoc4'},
    // { entityName: 'Entity5', entityType: 'EntityType5' , entityLocation: 'EntityLoc5'},
    // { entityName: 'Entity2', entityType: 'EntityType2' , entityLocation: 'EntityLoc2'},
    // { entityName: 'Entity3', entityType: 'EntityType3' , entityLocation: 'EntityLoc3'},
    // { entityName: 'Entity4', entityType: 'EntityType4' , entityLocation: 'EntityLoc4'},
    // { entityName: 'Entity5', entityType: 'EntityType5' , entityLocation: 'EntityLoc5'},
    // { entityName: 'Entity2', entityType: 'EntityType2' , entityLocation: 'EntityLoc2'},
    // { entityName: 'Entity3', entityType: 'EntityType3' , entityLocation: 'EntityLoc3'},
    // { entityName: 'Entity4', entityType: 'EntityType4' , entityLocation: 'EntityLoc4'},
    // { entityName: 'Entity5', entityType: 'EntityType5' , entityLocation: 'EntityLoc5'},
    // { entityName: 'Entity2', entityType: 'EntityType2' , entityLocation: 'EntityLoc2'},
    // { entityName: 'Entity3', entityType: 'EntityType3' , entityLocation: 'EntityLoc3'},
    // { entityName: 'Entity4', entityType: 'EntityType4' , entityLocation: 'EntityLoc4'},
    // { entityName: 'Entity5', entityType: 'EntityType5' , entityLocation: 'EntityLoc5'},
    // { entityName: 'Entity2', entityType: 'EntityType2' , entityLocation: 'EntityLoc2'},
    // { entityName: 'Entity3', entityType: 'EntityType3' , entityLocation: 'EntityLoc3'},
    // { entityName: 'Entity4', entityType: 'EntityType4' , entityLocation: 'EntityLoc4'},
    // { entityName: 'Entity5', entityType: 'EntityType5' , entityLocation: 'EntityLoc5'},
    // { entityName: 'Entity2', entityType: 'EntityType2' , entityLocation: 'EntityLoc2'},
    // { entityName: 'Entity3', entityType: 'EntityType3' , entityLocation: 'EntityLoc3'},
    // { entityName: 'Entity4', entityType: 'EntityType4' , entityLocation: 'EntityLoc4'},
    // { entityName: 'Entity5', entityType: 'EntityType5' , entityLocation: 'EntityLoc5'},
    // { entityName: 'Entity2', entityType: 'EntityType2' , entityLocation: 'EntityLoc2'},
    // { entityName: 'Entity3', entityType: 'EntityType3' , entityLocation: 'EntityLoc3'},
    // { entityName: 'Entity4', entityType: 'EntityType4' , entityLocation: 'EntityLoc4'},
    // { entityName: 'Entity5', entityType: 'EntityType5' , entityLocation: 'EntityLoc5'},
    // { entityName: 'Entity2', entityType: 'EntityType2' , entityLocation: 'EntityLoc2'},
    // { entityName: 'Entity3', entityType: 'EntityType3' , entityLocation: 'EntityLoc3'},
    // { entityName: 'Entity4', entityType: 'EntityType4' , entityLocation: 'EntityLoc4'},
    // { entityName: 'Entity5', entityType: 'EntityType5' , entityLocation: 'EntityLoc5'},
    // { entityName: 'Entity2', entityType: 'EntityType2' , entityLocation: 'EntityLoc2'},
    // { entityName: 'Entity3', entityType: 'EntityType3' , entityLocation: 'EntityLoc3'},
    // { entityName: 'Entity4', entityType: 'EntityType4' , entityLocation: 'EntityLoc4'},
    // { entityName: 'Entity5', entityType: 'EntityType5' , entityLocation: 'EntityLoc5'},
    // { entityName: 'Entity2', entityType: 'EntityType2' , entityLocation: 'EntityLoc2'},
    // { entityName: 'Entity3', entityType: 'EntityType3' , entityLocation: 'EntityLoc3'},
    // { entityName: 'Entity4', entityType: 'EntityType4' , entityLocation: 'EntityLoc4'},
    // { entityName: 'Entity5', entityType: 'EntityType5' , entityLocation: 'EntityLoc5'},
  ]

  public inActiveTable = [
    { entityName: 'InactiveEntity1', entityType: 'EntityType1' , entityLocation: 'EntityLoc1'},
    { entityName: 'InactiveEntity2', entityType: 'EntityType2' , entityLocation: 'EntityLoc2'},
    { entityName: 'InactiveEntity3', entityType: 'EntityType3' , entityLocation: 'EntityLoc3'},
    { entityName: 'InactiveEntity4', entityType: 'EntityType4' , entityLocation: 'EntityLoc4'},
    { entityName: 'InactiveEntity5', entityType: 'EntityType5' , entityLocation: 'EntityLoc5'},
  ]


  ngOnInit(): void {
  }

  public switchTab(event: any) {
    this.router.navigate([event], { relativeTo: this.activatedRoute });
  }



  





}

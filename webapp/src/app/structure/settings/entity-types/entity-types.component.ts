import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'entity-types',
  templateUrl: './entity-types.component.html',
  styleUrls: ['./entity-types.component.scss']
})
export class EntityTypesComponent implements OnInit {
  public ownershipTypes = ['Members', 'Partners', 'Share Holders'];

  public entityTypes = [
    { entityType: 'Basic', ownership: 'Members', },
    { entityType: 'LLC', ownership: 'Partners', },
    { entityType: 'S-Corp', ownership: 'Partners', },
    { entityType: 'Partnership', ownership: 'Partners', },
    { entityType: 'C-Corp', ownership: 'Share Holders', },
    { entityType: 'Foreign Corporation', ownership: 'Members', },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}

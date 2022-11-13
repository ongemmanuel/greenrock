import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityTypesComponent } from './entity-types.component';

describe('EntityTypesComponent', () => {
  let component: EntityTypesComponent;
  let fixture: ComponentFixture<EntityTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

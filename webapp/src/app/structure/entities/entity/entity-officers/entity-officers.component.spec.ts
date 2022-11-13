import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityOfficersComponent } from './entity-officers.component';

describe('EntityOfficersComponent', () => {
  let component: EntityOfficersComponent;
  let fixture: ComponentFixture<EntityOfficersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityOfficersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityOfficersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

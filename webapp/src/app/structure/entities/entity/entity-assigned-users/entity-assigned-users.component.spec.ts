import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityAssignedUsersComponent } from './entity-assigned-users.component';

describe('EntityAssignedUsersComponent', () => {
  let component: EntityAssignedUsersComponent;
  let fixture: ComponentFixture<EntityAssignedUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityAssignedUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityAssignedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

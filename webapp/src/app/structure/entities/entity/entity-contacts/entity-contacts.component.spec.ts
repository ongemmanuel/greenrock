import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityContactsComponent } from './entity-contacts.component';

describe('EntityContactsComponent', () => {
  let component: EntityContactsComponent;
  let fixture: ComponentFixture<EntityContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

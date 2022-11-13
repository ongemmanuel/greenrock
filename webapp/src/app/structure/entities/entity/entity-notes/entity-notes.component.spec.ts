import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityNotesComponent } from './entity-notes.component';

describe('EntityNotesComponent', () => {
  let component: EntityNotesComponent;
  let fixture: ComponentFixture<EntityNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityNotesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

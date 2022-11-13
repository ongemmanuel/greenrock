import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityServiceLogComponent } from './entity-service-log.component';

describe('EntityServiceLogComponent', () => {
  let component: EntityServiceLogComponent;
  let fixture: ComponentFixture<EntityServiceLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityServiceLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityServiceLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

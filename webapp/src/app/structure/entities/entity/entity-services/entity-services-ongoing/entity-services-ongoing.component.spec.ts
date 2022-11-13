import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityServicesOngoingComponent } from './entity-services-ongoing.component';

describe('EntityServicesOngoingComponent', () => {
  let component: EntityServicesOngoingComponent;
  let fixture: ComponentFixture<EntityServicesOngoingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityServicesOngoingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityServicesOngoingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

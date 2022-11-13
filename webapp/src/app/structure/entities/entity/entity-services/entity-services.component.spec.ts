import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityServicesComponent } from './entity-services.component';

describe('EntityServicesComponent', () => {
  let component: EntityServicesComponent;
  let fixture: ComponentFixture<EntityServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

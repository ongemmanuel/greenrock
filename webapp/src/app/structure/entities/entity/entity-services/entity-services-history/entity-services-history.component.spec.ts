import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityServicesHistoryComponent } from './entity-services-history.component';

describe('EntityServicesHistoryComponent', () => {
  let component: EntityServicesHistoryComponent;
  let fixture: ComponentFixture<EntityServicesHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityServicesHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityServicesHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

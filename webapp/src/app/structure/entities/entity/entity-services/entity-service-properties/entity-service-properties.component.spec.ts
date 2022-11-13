import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityServicePropertiesComponent } from './entity-service-properties.component';

describe('EntityServicePropertiesComponent', () => {
  let component: EntityServicePropertiesComponent;
  let fixture: ComponentFixture<EntityServicePropertiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityServicePropertiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityServicePropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

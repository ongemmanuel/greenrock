import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityServiceSettingsComponent } from './entity-service-settings.component';

describe('EntityServiceSettingsComponent', () => {
  let component: EntityServiceSettingsComponent;
  let fixture: ComponentFixture<EntityServiceSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityServiceSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityServiceSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityUploadsComponent } from './entity-uploads.component';

describe('EntityUploadsComponent', () => {
  let component: EntityUploadsComponent;
  let fixture: ComponentFixture<EntityUploadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityUploadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityUploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

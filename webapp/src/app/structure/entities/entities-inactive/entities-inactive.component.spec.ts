import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesInactiveComponent } from './entities-inactive.component';

describe('EntitiesInactiveComponent', () => {
  let component: EntitiesInactiveComponent;
  let fixture: ComponentFixture<EntitiesInactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntitiesInactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntitiesInactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

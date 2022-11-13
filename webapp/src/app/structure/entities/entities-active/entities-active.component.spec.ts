import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntitiesActiveComponent } from './entities-active.component';

describe('EntitiesActiveComponent', () => {
  let component: EntitiesActiveComponent;
  let fixture: ComponentFixture<EntitiesActiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntitiesActiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntitiesActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

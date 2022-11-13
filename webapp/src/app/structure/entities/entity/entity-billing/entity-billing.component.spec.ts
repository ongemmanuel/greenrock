import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityBillingComponent } from './entity-billing.component';

describe('EntityBillingComponent', () => {
  let component: EntityBillingComponent;
  let fixture: ComponentFixture<EntityBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityBillingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

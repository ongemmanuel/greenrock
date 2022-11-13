import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityServiceBillingsAndFeesComponent } from './entity-service-billings-and-fees.component';

describe('EntityServiceBillingsAndFeesComponent', () => {
  let component: EntityServiceBillingsAndFeesComponent;
  let fixture: ComponentFixture<EntityServiceBillingsAndFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityServiceBillingsAndFeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntityServiceBillingsAndFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

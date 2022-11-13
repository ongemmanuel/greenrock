import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBlockComponent } from './input-block.component';

describe('InputBlockComponent', () => {
  let component: InputBlockComponent;
  let fixture: ComponentFixture<InputBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

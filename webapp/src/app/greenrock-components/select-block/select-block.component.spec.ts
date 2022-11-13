import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectBlockComponent } from './select-block.component';

describe('SelectBlockComponent', () => {
  let component: SelectBlockComponent;
  let fixture: ComponentFixture<SelectBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBlockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

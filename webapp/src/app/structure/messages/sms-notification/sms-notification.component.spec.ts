import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsNotificationComponent } from './sms-notification.component';

describe('SmsNotificationComponent', () => {
  let component: SmsNotificationComponent;
  let fixture: ComponentFixture<SmsNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmsNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmsNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

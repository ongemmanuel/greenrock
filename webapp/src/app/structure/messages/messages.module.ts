import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages.component';
import { RouterModule, Routes } from '@angular/router';
import { GreenrockComponentsModule } from 'src/app/greenrock-components/greenrock-components.module';
import { SmsHistoryComponent } from './sms-history/sms-history.component';
import { SmsNotificationComponent } from './sms-notification/sms-notification.component';

const routes: Routes = [
  {
    path: '', component: MessagesComponent,
    children: [
      { path: ':id/SMS History', component: SmsHistoryComponent },
      { path: ':id/SMS Notification', component: SmsNotificationComponent },
    ]
  },
];

@NgModule({
  declarations: [
    MessagesComponent,
    SmsHistoryComponent,
    SmsNotificationComponent
  ],
  imports: [
    CommonModule,
    GreenrockComponentsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MessagesModule { }

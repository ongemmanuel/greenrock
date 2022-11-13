import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'Entities', loadChildren: () => import('./structure/entities/entities.module').then(m => m.EntitiesModule) },
  { path: 'Messages', loadChildren: () => import('./structure/messages/messages.module').then(m => m.MessagesModule) },
  { path: 'Tasks', loadChildren: () => import('./structure/tasks/tasks.module').then(m => m.TasksModule) },
  { path: 'Reports', loadChildren: () => import('./structure/reports/reports.module').then(m => m.ReportsModule) },
  { path: 'Billing', loadChildren: () => import('./structure/billing/billing.module').then(m => m.BillingModule) },
  { path: 'Settings', loadChildren: () => import('./structure/settings/settings.module').then(m => m.SettingsModule) },
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntitiesComponent } from './entities.component';
import { RouterModule, Routes } from '@angular/router';
import { GreenrockComponentsModule } from 'src/app/greenrock-components/greenrock-components.module';

import { EntityComponent } from './entity/entity.component';
import { EntityProfileComponent } from './entity/entity-profile/entity-profile.component';
import { EntityServicesComponent } from './entity/entity-services/entity-services.component';
import { EntityOfficersComponent } from './entity/entity-officers/entity-officers.component';
import { EntityContactsComponent } from './entity/entity-contacts/entity-contacts.component';
import { EntityUploadsComponent } from './entity/entity-uploads/entity-uploads.component';
import { EntityBillingComponent } from './entity/entity-billing/entity-billing.component';
import { EntityAssignedUsersComponent } from './entity/entity-assigned-users/entity-assigned-users.component';
import { EntityNotesComponent } from './entity/entity-notes/entity-notes.component';
import { EntityTasksComponent } from './entity/entity-tasks/entity-tasks.component';
import { EntityServicesOngoingComponent } from './entity/entity-services/entity-services-ongoing/entity-services-ongoing.component';
import { EntityServicesHistoryComponent } from './entity/entity-services/entity-services-history/entity-services-history.component';
import { EntityServiceLogComponent } from './entity/entity-services/entity-service-log/entity-service-log.component';
import { EntityServiceSettingsComponent } from './entity/entity-services/entity-service-settings/entity-service-settings.component';
import { EntityServiceBillingsAndFeesComponent } from './entity/entity-services/entity-service-billings-and-fees/entity-service-billings-and-fees.component';
import { EntityServicePropertiesComponent } from './entity/entity-services/entity-service-properties/entity-service-properties.component';
import { InvoicesComponent } from './entity/entity-billing/invoices/invoices.component';
import { PaymentMethodsComponent } from './entity/entity-billing/payment-methods/payment-methods.component';
import { BillingProfileComponent } from './entity/entity-billing/billing-profile/billing-profile.component';
import { BillingLogComponent } from './entity/entity-billing/billing-log/billing-log.component';
import { EntitiesActiveComponent } from './entities-active/entities-active.component';
import { EntitiesInactiveComponent } from './entities-inactive/entities-inactive.component';

const routes: Routes = [
  {
    path: '', component: EntitiesComponent,
    children: [
      {
        path: '',
        redirectTo: 'Active',
        pathMatch: 'full'
      },
      { path: 'Active', component: EntitiesActiveComponent },
      { path: 'Inactive', component: EntitiesInactiveComponent },
    ]
  },
  {
    path: 'Active/:id',
    component: EntityComponent,
    children: [
      { path: 'Company Profile', component: EntityProfileComponent },
      {
        path: 'Services', component: EntityServicesComponent,
        children: [
          {
            path: '',
            redirectTo: 'Ongoing',
            pathMatch: 'full'
          },
          { path: 'Ongoing', component: EntityServicesOngoingComponent },
          { path: 'History', component: EntityServicesHistoryComponent },
          { path: ':id/Service Log', component: EntityServiceLogComponent },
          { path: ':id/Service Settings', component: EntityServiceSettingsComponent },
          { path: ':id/Billings And Fees', component: EntityServiceBillingsAndFeesComponent },
          { path: ':id/Service Properties', component: EntityServicePropertiesComponent }
        ]
      },
      { path: 'Officers', component: EntityOfficersComponent },
      { path: 'Contacts', component: EntityContactsComponent },
      { path: 'Uploads', component: EntityUploadsComponent },
      {
        path: 'Billing', component: EntityBillingComponent,
        children: [
          {
            path: '',
            redirectTo: 'Invoices',
            pathMatch: 'full'
          },
          { path: 'Invoices', component: InvoicesComponent },
          { path: 'Payment Methods', component: PaymentMethodsComponent },
          { path: 'Billing Profile', component: BillingProfileComponent },
          { path: 'Billing Log', component: BillingLogComponent },
        ]
      },
      { path: 'Assigned Users', component: EntityAssignedUsersComponent },
      { path: 'Notes', component: EntityNotesComponent },
      { path: 'Tasks', component: EntityTasksComponent }
    ]
  },
  {
    path: 'Inactive/:id',
    component: EntityComponent,
    children: [
      { path: 'Company Profile', component: EntityProfileComponent },
      {
        path: 'Services', component: EntityServicesComponent,
        children: [
          {
            path: '',
            redirectTo: 'Ongoing',
            pathMatch: 'full'
          },
          { path: 'Ongoing', component: EntityServicesOngoingComponent },
          { path: 'History', component: EntityServicesHistoryComponent },
          { path: ':id/Service Log', component: EntityServiceLogComponent },
          { path: ':id/Service Settings', component: EntityServiceSettingsComponent },
          { path: ':id/Billings And Fees', component: EntityServiceBillingsAndFeesComponent },
          { path: ':id/Service Properties', component: EntityServicePropertiesComponent }
        ]
      },
      { path: 'Officers', component: EntityOfficersComponent },
      { path: 'Contacts', component: EntityContactsComponent },
      { path: 'Uploads', component: EntityUploadsComponent },
      {
        path: 'Billing', component: EntityBillingComponent,
        children: [
          {
            path: '',
            redirectTo: 'Invoices',
            pathMatch: 'full'
          },
          { path: 'Invoices', component: InvoicesComponent },
          { path: 'Payment Methods', component: PaymentMethodsComponent },
          { path: 'Billing Profile', component: BillingProfileComponent },
          { path: 'Billing Log', component: BillingLogComponent },
        ]
      },
      { path: 'Assigned Users', component: EntityAssignedUsersComponent },
      { path: 'Notes', component: EntityNotesComponent },
      { path: 'Tasks', component: EntityTasksComponent }
    ]
  }
];

@NgModule({
  declarations: [
    EntitiesComponent,
    EntityComponent,
    EntityProfileComponent,
    EntityServicesComponent,
    EntityOfficersComponent,
    EntityContactsComponent,
    EntityUploadsComponent,
    EntityBillingComponent,
    EntityAssignedUsersComponent,
    EntityNotesComponent,
    EntityTasksComponent,
    EntityServicesOngoingComponent,
    EntityServicesHistoryComponent,
    EntityServiceLogComponent,
    EntityServiceSettingsComponent,
    EntityServiceBillingsAndFeesComponent,
    EntityServicePropertiesComponent,
    InvoicesComponent,
    PaymentMethodsComponent,
    BillingProfileComponent,
    BillingLogComponent,
    EntitiesActiveComponent,
    EntitiesInactiveComponent
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
export class EntitiesModule { }

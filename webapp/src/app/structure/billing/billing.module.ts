import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GreenrockComponentsModule } from 'src/app/greenrock-components/greenrock-components.module';
import { BillingComponent } from './billing.component';
import { AllInvoicesComponent } from './all-invoices/all-invoices.component';
import { RecurringBillingInvoicePreviewComponent } from './recurring-billing-invoice-preview/recurring-billing-invoice-preview.component';

const routes: Routes = [
  {
    path: '', component: BillingComponent,
    children: [
      {
        path: '',
        redirectTo: 'All Invoices',
        pathMatch: 'full'
      },
      { path: 'All Invoices', component: AllInvoicesComponent },
      { path: 'Recurring Billing/Invoice Preview', component: RecurringBillingInvoicePreviewComponent },
    ]
  }
]

@NgModule({
  declarations: [
    BillingComponent,
    AllInvoicesComponent,
    RecurringBillingInvoicePreviewComponent
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
export class BillingModule { }

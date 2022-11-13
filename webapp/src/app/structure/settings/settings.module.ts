import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GreenrockComponentsModule } from 'src/app/greenrock-components/greenrock-components.module';
import { SettingsComponent } from './settings.component';
import { GeneralComponent } from './general/general.component';
import { CustomFieldsComponent } from './custom-fields/custom-fields.component';
import { EntityTypesComponent } from './entity-types/entity-types.component';
import { ServicesComponent } from './services/services.component';
import { BusinessInformationComponent } from './general/business-information/business-information.component';
import { CompanyLogoComponent } from './general/company-logo/company-logo.component';
import { EmailSettingsComponent } from './general/email-settings/email-settings.component';

const routes: Routes = [
  {
    path: '', component: SettingsComponent,
    children: [
      {
        path: 'General', component: GeneralComponent, 
        children: [
          {
            path: '',
            redirectTo: 'Business Information',
            pathMatch: 'full'
          },
          { path: 'Business Information', component: BusinessInformationComponent },
          { path: 'Company Logo', component: CompanyLogoComponent },
          { path: 'Email Settings', component: EmailSettingsComponent },
        ]
      },
      { path: 'Custom Fields', component: CustomFieldsComponent },
      { path: 'Entity Types', component: EntityTypesComponent },
      { path: 'Services', component: ServicesComponent },
    ]
  }
]

@NgModule({
  declarations: [
    SettingsComponent,
    GeneralComponent,
    CustomFieldsComponent,
    EntityTypesComponent,
    ServicesComponent,
    BusinessInformationComponent,
    CompanyLogoComponent,
    EmailSettingsComponent
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
export class SettingsModule { }

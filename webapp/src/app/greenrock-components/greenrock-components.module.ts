import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './page-header/page-header.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { InputBlockComponent } from './input-block/input-block.component';
import { SelectBlockComponent } from './select-block/select-block.component';
import { CamelCaseToTitleSeperatedCasePipe } from '../greenrock-pipes/camel-case-to-title-case/camel-case-to-title-seperated-case.pipe';
import { FormatInstanceofDatePipe } from '../greenrock-pipes/format-instanceof-date/format-instanceof-date.pipe';
import { IncludesPipe } from '../greenrock-pipes/includes/includes.pipe';
import { IsInstanceOfDatePipe } from '../greenrock-pipes/is-instance-of-date/is-instance-of-date.pipe';
import { CheckActivePipe } from '../greenrock-pipes/check-active/check-active.pipe';
import { TableWithInputComponent } from './table-with-input/table-with-input.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    PaginationComponent,
    TableComponent,
    TabsComponent,
    InputBlockComponent,
    SelectBlockComponent,
    CamelCaseToTitleSeperatedCasePipe,
    FormatInstanceofDatePipe,
    IncludesPipe,
    IsInstanceOfDatePipe,
    CheckActivePipe,
    TableWithInputComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageHeaderComponent,
    PaginationComponent,
    TableComponent,
    TabsComponent,
    InputBlockComponent,
    SelectBlockComponent,
    TableWithInputComponent
  ]
})
export class GreenrockComponentsModule { }

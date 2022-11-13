import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { RouterModule, Routes } from '@angular/router';
import { GreenrockComponentsModule } from 'src/app/greenrock-components/greenrock-components.module';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { AllTasksComponent } from './all-tasks/all-tasks.component';
import { ArchiveComponent } from './archive/archive.component';

const routes: Routes = [
  {
    path: '', component: TasksComponent,
    children: [
      {
        path: '',
        redirectTo: 'My tasks',
        pathMatch: 'full'
      },
      { path: 'My tasks', component: MyTasksComponent },
      { path: 'All tasks', component: AllTasksComponent },
      { path: 'Archive', component: ArchiveComponent },
    ]
  },
];

@NgModule({
  declarations: [
    TasksComponent,
    MyTasksComponent,
    AllTasksComponent,
    ArchiveComponent
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
export class TasksModule { }

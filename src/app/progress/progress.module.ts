import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthGuard} from '../auth/auth.guard';
import {MaterialModule} from '../material.module';
import {EditProgressComponent} from './edit/edit.progress.component';
import {ListProgressComponent} from './list/list-progress.component';
import {Routes, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: 'progress',
    canActivateChild: [AuthGuard],
    children: [
      { path: '', pathMatch: 'full', component: ListProgressComponent},
      { path: ':id', component: EditProgressComponent},
    ]},
];

@NgModule({
  declarations: [
    ListProgressComponent,
    EditProgressComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProgressModule { }

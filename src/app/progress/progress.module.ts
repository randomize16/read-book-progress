import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthGuard} from '../auth/auth.guard';
import {MaterialModule} from '../material.module';
import {ProgressComponent} from './progress.component';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  { path: 'progress', component: ProgressComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    ProgressComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProgressModule { }

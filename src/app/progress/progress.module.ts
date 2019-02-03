import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EffectsModule} from '@ngrx/effects';
import {AuthGuard} from '../auth/auth.guard';
import {MaterialModule} from '../material.module';
import {EditProgressComponent} from './edit/edit.progress.component';
import {ListProgressComponent} from './list/list-progress.component';
import {Routes, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {ProgressEffects} from './store/progress.effects';

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
    RouterModule.forChild(routes),
    EffectsModule.forFeature([ProgressEffects])
  ],
  exports: [
    RouterModule
  ]
})
export class ProgressModule { }

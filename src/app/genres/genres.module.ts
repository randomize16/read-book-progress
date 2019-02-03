import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from '../auth/auth.guard';
import {MaterialModule} from '../material.module';
import { CreateGenresComponent } from './create-genres/create-genres.component';
import {GenresComponent} from './genres.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'genres',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '', component: GenresComponent,
        children: [
          {path: 'new', component: CreateGenresComponent}
        ]
      },
    ]
  },
];

@NgModule({
  declarations: [
    CreateGenresComponent,
    GenresComponent
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
export class GenresModule { }

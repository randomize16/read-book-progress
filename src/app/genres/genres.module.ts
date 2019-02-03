import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {AuthGuard} from '../auth/auth.guard';
import {AuthorsEffects} from '../authors/store/authors.effects';
import {MaterialModule} from '../material.module';
import { CreateGenresComponent } from './create-genres/create-genres.component';
import {GenresComponent} from './genres.component';
import {RouterModule, Routes} from '@angular/router';
import {GenresEffects} from './store/genres.effects';

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
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GenresEffects]),
  ],
  exports: [
    RouterModule
  ]
})
export class GenresModule { }

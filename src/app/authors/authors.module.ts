import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {AuthGuard} from '../auth/auth.guard';
import {MaterialModule} from '../material.module';
import {AuthorEditComponent} from './author-edit/author-edit.component';
import {AuthorsListComponent} from './authors-list/authors-list.component';
import {AuthorsEffects} from './store/authors.effects';

const routes: Routes = [
  {
    path: 'authors',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: '', component: AuthorsListComponent,
        children: [
          {path: ':id', component: AuthorEditComponent}
        ]
      },
    ]
  },
];

@NgModule({
  declarations: [
    AuthorsListComponent,
    AuthorEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([AuthorsEffects]),
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthorsModule { }

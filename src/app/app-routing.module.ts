import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth/auth.guard';
import {SigninComponent} from './auth/signin/signin.component';
import {SignupComponent} from './auth/signup/signup.component';
import {AuthorsListComponent} from './authors/authors-list/authors-list.component';
import {GenresComponent} from './genres/genres.component';

const routes: Routes = [
  { path: '', component: AuthorsListComponent},
  { path: 'authors', component: AuthorsListComponent},
  { path: 'genres', component: GenresComponent},
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuard]},
  { path: 'signin', component: SigninComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

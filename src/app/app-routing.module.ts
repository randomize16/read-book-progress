import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from './auth/auth.guard';
import {AuthorsListComponent} from './authors/authors-list/authors-list.component';
import {GenresComponent} from './genres/genres.component';

const routes: Routes = [
  { path: 'authors', component: AuthorsListComponent, canActivate: [AuthGuard]},
  { path: 'genres', component: GenresComponent, canActivate: [AuthGuard]},
  { path: '', pathMatch: 'full', redirectTo: '/progress'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

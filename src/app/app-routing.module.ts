import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthorsListComponent} from './authors/authors-list/authors-list.component';
import {GenresComponent} from './genres/genres.component';

const routes: Routes = [
  { path: '', component: AuthorsListComponent},
  { path: 'authors', component: AuthorsListComponent},
  { path: 'genres', component: GenresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

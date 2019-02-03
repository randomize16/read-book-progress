import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthModule} from './auth/auth.module';
import {AuthEffects} from './auth/store/auth.effects';
import * as fromAppState from './app.state';
import {AuthorsModule} from './authors/authors.module';
import {GenresModule} from './genres/genres.module';
import {MaterialModule} from './material.module';
import {ProgressModule} from './progress/progress.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/progress'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes, {useHash: true}),
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(fromAppState.reducers),
    ProgressModule,
    AuthModule,
    GenresModule,
    AuthorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

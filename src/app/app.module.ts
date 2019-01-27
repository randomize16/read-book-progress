import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthModule} from './auth/auth.module';
import {AuthEffects} from './auth/store/auth.effects';
import { AuthorEditComponent } from './authors/author-edit/author-edit.component';
import { AuthorsListComponent } from './authors/authors-list/authors-list.component';
import { GenresComponent } from './genres/genres.component';
import * as fromAppState from './app.state';
import {MaterialModule} from './material.module';
import { AuthenticatedDirective } from './auth/authenticated.directive';
import {ProgressModule} from './progress/progress.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthorEditComponent,
    AuthorsListComponent,
    GenresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(fromAppState.reducers),
    ProgressModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

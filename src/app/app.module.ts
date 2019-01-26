import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthEffects} from './auth/store/auth.effects';
import { AuthorEditComponent } from './authors/author-edit/author-edit.component';
import { AuthorsListComponent } from './authors/authors-list/authors-list.component';
import { GenresComponent } from './genres/genres.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import * as fromAppState from './app.state';

@NgModule({
  declarations: [
    AppComponent,
    AuthorEditComponent,
    AuthorsListComponent,
    GenresComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(fromAppState.reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material.module';
import {AuthenticatedDirective} from './authenticated.directive';
import {NoAuthGuard} from './no-auth-guard.service';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {Routes, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
  {path: 'signup', component: SignupComponent, canActivate: [NoAuthGuard]},
  {path: 'signin', component: SigninComponent, canActivate: [NoAuthGuard]}
];

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    AuthenticatedDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule,
    AuthenticatedDirective
  ]
})
export class AuthModule {
}

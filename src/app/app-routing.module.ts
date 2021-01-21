import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './auth/login/login.component';
// import { TrainingComponent } from './training/training/training.component';
import { SignupComponent } from './auth/signup/signup.component';

import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  // { path: '', component: WelcomeComponent }, TODO for production
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'training', component: TrainingComponent, canActivate: [AuthGuard] }, TODO for production
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // This is an exception for providers
  providers: [AuthGuard]
})
export class AppRoutingModule { }

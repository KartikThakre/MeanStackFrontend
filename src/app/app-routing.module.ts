import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
const routes: Routes = [
  {
    path : 'login',
    component : AuthComponent
  },
  {
    path :'signup',
    component : AuthComponent
  },
  {
    path : 'forgot-password',
    component : ForgotPasswordComponent
  }
  // {
  //   path :'invoice-builder',
  //   loadChildren : 'app/invoice-builder/invoice-builder.module#InvoiceBuilderModule'
  // },
  // {
  //   path : '**',
  //   redirectTo : 'invoice-builder'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertMailComponent } from './alert-mail.component';

const routes: Routes = [
  {
    path: '',
    component: AlertMailComponent,
    data: {
      breadcrumb: 'Alert Mail',
      status: true
    }
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertMailRoutingModule { }
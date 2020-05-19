import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmtpComponent } from './smtp.component';

const routes: Routes = [
  {
    path: '',
    component: SmtpComponent,
    data: {
      breadcrumb: 'SMTP',
      status: true
    }
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmtpRoutingModule { }
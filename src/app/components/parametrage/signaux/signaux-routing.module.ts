import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignauxComponent } from './signaux.component';

const routes: Routes = [
  {
    path: '',
    component: SignauxComponent,
    data: {
      breadcrumb: 'Signaux',
      status: true
    }
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignauxRoutingModule { }
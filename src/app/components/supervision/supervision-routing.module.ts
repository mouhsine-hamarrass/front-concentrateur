import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupervisionComponent } from './supervision.component';

const routes: Routes = [
  {
    path: '',
    component: SupervisionComponent,
    data: {
      breadcrumb: 'Supervision',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisionRoutingModule { }

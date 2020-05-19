import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdvComponent } from './pdv.component';

const routes: Routes = [
  {
    path: '',
    component: PdvComponent,
    data: {
      breadcrumb: 'Point de vente',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdvRoutingModule { }
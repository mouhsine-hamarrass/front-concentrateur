import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaiementLotComponent } from './paiement-lot.component';

const routes: Routes = [
  {
    path: '',
    component: PaiementLotComponent,
    data: {
      breadcrumb: 'Paiement Lot',
      status: true
    }
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaiementLotRoutingModule { }
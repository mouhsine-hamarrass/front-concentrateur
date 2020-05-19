import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutProduitComponent } from './ajout-produit.component';

const routes: Routes = [
  {
    path: '',
    component: AjoutProduitComponent,
    data: {
      breadcrumb: 'Ajout Produit',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjoutProduitRoutingModule { }
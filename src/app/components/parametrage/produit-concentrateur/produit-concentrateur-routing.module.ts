import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduitConcentrateurComponent } from './produit-concentrateur.component';

const routes: Routes = [
  {
    path: '',
    component: ProduitConcentrateurComponent,
    data: {
      breadcrumb: 'Produit Concentrateur',
      status: true
    }
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProduitConcentrateurRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'offre', 
      status: false
    },
    children:[
      {
        path: 'page-principale',
        loadChildren: () => import ('./page-principale/page-principale.module').then(m => m.PagePrincipaleModule)
      },{
        path: 'ajout-produit',
        loadChildren: () => import ('./ajout-produit/ajout-produit.module').then(m => m.AjoutProduitModule)
      },{
        path: 'validation-offre',
        loadChildren: () => import ('./validation-offre/validation-offre.module').then(m => m.ValidationOffreModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffreRoutingModule { }


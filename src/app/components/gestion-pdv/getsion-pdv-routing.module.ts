import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Gestion PDV',
      status: false
    },
    children:[
      {
        path: 'point-de-vente',
        loadChildren: () => import ('./pdv/pdv.module').then(m => m.PdvModule)
      },{
        path: 'terminaux',
        loadChildren: () => import ('./terminaux/terminaux.module').then(m => m.TerminauxModule )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionPDVRoutingModule { }

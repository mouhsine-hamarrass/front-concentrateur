import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './layouts/admin/admin.component';
import {AuthComponent} from './layouts/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'auth/login',
        pathMatch : 'full'
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
      }
    ]
  },{
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }, {
        path: 'communication', 
        loadChildren: () => import('./components/commmunication/communication.module').then(m => m.CommunicationModule)
      }, {
        path: 'TFJ',
        loadChildren: () => import('./components/tfj/tfj.module').then(m => m.TfjModule),
      }, {
        path: 'supervision',
        loadChildren: () => import('./components/supervision/supervision.module').then(m => m.SupervisionModule),
      },
      {
        path: 'pilotage',
        loadChildren: () => import('./components/pilotage/pilotage.module').then(m => m.PilotageModule),
      },{
        path: 'parametrage',
        loadChildren: () => import('./components/parametrage/parametrage.module').then(m => m.ParametrageModule)
      },{
        path: 'offre',
        loadChildren: () => import('./components/offre/offre.module').then(m => m.OffreModule)
      },{
        path: 'pdv',
        loadChildren: () => import('./components/gestion-pdv/gestion-pdv.module').then(m => m.GestionPDVModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommmunicationComponent } from './commmunication.component';

const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Communication',
      status: false
    },
    children: [
      {
        path: 'message-terminaux',
        loadChildren: () => import('./message-terminaux/message-terminaux.module').then(m => m.MessageTerminauxModule)
      }, {
        path: 'message-ticket',
        loadChildren: () => import('./message-ticket/message-ticket.module').then(m => m.MessageTicketModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationRoutingModule { }

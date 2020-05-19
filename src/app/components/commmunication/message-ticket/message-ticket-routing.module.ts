import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageTicketComponent } from './message-ticket.component';

const routes: Routes = [
  {
    path: '',
    component: MessageTicketComponent,
    data: {
      breadcrumb: 'Message Tickets',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class MessageTicketRoutingModule { }
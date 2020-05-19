import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageTerminauxComponent } from './message-terminaux.component';

const routes: Routes = [
  {
    path: '',
    component: MessageTerminauxComponent,
    data: {
      breadcrumb: 'Message Terminaux',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class MessageTerminauxRoutingModule { }
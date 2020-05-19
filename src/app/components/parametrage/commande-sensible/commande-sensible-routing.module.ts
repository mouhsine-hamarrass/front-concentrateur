import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommandeSensibleComponent } from './commande-sensible.component';

const routes: Routes = [
  {
    path: '',
    component: CommandeSensibleComponent,
    data: {
      breadcrumb: 'Commande Sensible',
      status: true
    }
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandeSensibleRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PilotageComponent } from './pilotage.component';

const routes: Routes = [
  {
    path: '',
    component: PilotageComponent,
    data: {
      breadcrumb: 'Pilotage',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PilotageRoutingModule { }

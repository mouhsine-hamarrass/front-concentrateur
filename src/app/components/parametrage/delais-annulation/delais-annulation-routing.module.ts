import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelaisAnnulationComponent } from './delais-annulation.component';

const routes: Routes = [
  {
    path: '',
    component: DelaisAnnulationComponent,
    data: {
      breadcrumb: 'Delais Annulation',
      status: true
    }
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelaisAnnulationRoutingModule { }
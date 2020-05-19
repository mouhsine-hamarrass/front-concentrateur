import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TfjComponent } from './tfj.component';

const routes: Routes = [
  {
    path: '',
    component: TfjComponent,
    data: {
      breadcrumb: 'Traitement de Fin de Journée',
      icon: 'icofont-archive bg-c-blue',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TfjRoutingModule { }

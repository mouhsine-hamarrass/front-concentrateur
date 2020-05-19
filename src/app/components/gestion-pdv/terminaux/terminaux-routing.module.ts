import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerminauxComponent } from './terminaux.component';

const routes: Routes = [
  {
    path: '',
    component: TerminauxComponent,
    data: {
      breadcrumb: 'Terinaux',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerminauxRoutingModule { }
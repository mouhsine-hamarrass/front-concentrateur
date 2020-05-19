import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValidationOffreComponent } from './validation-offre.component';

const routes: Routes = [
  {
    path: '',
    component: ValidationOffreComponent,
    data: {
      breadcrumb: 'Validation Offre',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class ValidationOffreRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttributaireComponent } from './attributaire.component';

const routes: Routes = [
  {
    path: '',
    component: AttributaireComponent,
    data: {
      breadcrumb: 'Attributaire',
      status: true
    }
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttributaireRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypePdvComponent } from './type-pdv.component';

const routes: Routes = [
  {
    path: '',
    component: TypePdvComponent,
    data: {
      breadcrumb: 'Type PDV',
      status: true
    }
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypePdvRoutingModule { }
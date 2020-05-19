import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HippodromeComponent } from './hippodrome.component';

const routes: Routes = [
  {
    path: '',
    component: HippodromeComponent,
    data: {
      breadcrumb: 'Hippodrome',
      status: true
    }
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HippodromeRoutingModule { }
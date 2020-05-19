import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeTerminalComponent } from './type-terminal.component';

const routes: Routes = [
  {
    path: '',
    component: TypeTerminalComponent,
    data: {
      breadcrumb: 'Type Terminal',
      status: true
    }
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TypeTerminalRoutingModule { }
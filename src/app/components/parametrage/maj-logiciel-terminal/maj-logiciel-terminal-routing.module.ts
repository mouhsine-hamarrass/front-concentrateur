import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MajLogicielTerminalComponent } from './maj-logiciel-terminal.component';

const routes: Routes = [
  {
    path: '',
    component: MajLogicielTerminalComponent,
    data: {
      breadcrumb: 'Mise à jour terminaux (Logiciel)',
      status: true
    }
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MajLogicielTerminalRoutingModule { }
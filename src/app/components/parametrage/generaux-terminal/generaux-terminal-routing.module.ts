import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerauxTerminalComponent } from './generaux-terminal.component';

const routes: Routes = [
  {
    path: '',
    component: GenerauxTerminalComponent,
    data: {
      breadcrumb: 'Parametes Généraux terminaux',
      status: true
    }
  }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerauxTerminalRoutingModule { }
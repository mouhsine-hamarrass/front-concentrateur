import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagePrincipaleComponent } from './page-principale.component';

const routes: Routes = [
  {
    path: '',
    component: PagePrincipaleComponent,
    data: {
      breadcrumb: 'Page Principale',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagePrincipaleRoutingModule { }
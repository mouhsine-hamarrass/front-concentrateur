import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { GestionPDVRoutingModule } from './getsion-pdv-routing.module';
import { GestionPdvComponent } from './gestion-pdv.component';



@NgModule({
  imports: [
    CommonModule,
    GestionPDVRoutingModule,
    SharedModule

  ],
  declarations: [GestionPdvComponent]
})
export class GestionPDVModule { }

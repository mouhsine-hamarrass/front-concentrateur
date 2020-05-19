import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from '../../shared/shared.module'
import { ParametrageComponent } from './parametrage.component';
import { ParametrageRoutingModule } from  './parametrage-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ParametrageRoutingModule,
    SharedModule
  ],
  declarations: [ParametrageComponent],
  entryComponents: [
  ]
})
export class ParametrageModule { }

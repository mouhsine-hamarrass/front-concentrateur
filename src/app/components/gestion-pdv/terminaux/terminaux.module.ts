import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule} from '@angular/material';
import { TerminauxRoutingModule } from './terminaux-routing.module';
import { TerminauxComponent } from './terminaux.component';


@NgModule({
  imports: [
    CommonModule,
    TerminauxRoutingModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
  ],
  declarations: [TerminauxComponent],
  entryComponents : []
})
export class TerminauxModule { }

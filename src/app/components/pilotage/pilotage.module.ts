import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatIconModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatDialogModule,
  MatCheckboxModule} from '@angular/material';
import { PilotageRoutingModule } from './pilotage-routing.module';
import { PilotageComponent } from './pilotage.component';
import { RepartitionRapportDialogComponent } from './repartition-rapport-dialog/repartition-rapport-dialog.component';


@NgModule({
  imports: [
    CommonModule,
    PilotageRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  declarations: [PilotageComponent, RepartitionRapportDialogComponent],
  entryComponents: [RepartitionRapportDialogComponent]
})
export class PilotageModule { }

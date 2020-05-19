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
  MatCheckboxModule,
  MatStepperModule,
  MatProgressBarModule,
  MatCardModule} from '@angular/material';
import { TfjRoutingModule } from './tfj-routing.module';
import { TfjDialogComponent } from './tfj-dialog/tfj-dialog.component';
import { TfjComponent } from './tfj.component';

  @NgModule({
    imports: [
      CommonModule,
      TfjRoutingModule,
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
      MatCheckboxModule,
      MatStepperModule,
      MatProgressBarModule,
      MatCardModule
    ],
    declarations: [TfjComponent, TfjDialogComponent],
    entryComponents: [
      TfjDialogComponent
    ]
  })
  export class TfjModule { }
  
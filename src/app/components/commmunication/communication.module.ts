import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Module Import */
import {SharedModule} from '../../shared/shared.module';
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, MatTableModule, MatCardModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatCheckboxModule } from '@angular/material';
import { CommunicationRoutingModule } from './communication-routing.module';

/* Component Import */
import { CommmunicationComponent } from './commmunication.component';


@NgModule({
  imports: [
    CommonModule,
    CommunicationRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  declarations: [
      CommmunicationComponent
    ]
})
export class CommunicationModule { }

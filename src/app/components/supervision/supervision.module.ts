import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Module Import */
import {SharedModule} from '../../shared/shared.module';
import { SupervisionRoutingModule } from './supervision-routing.module';
import { MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatIconModule, MatTableModule, MatCardModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatCheckboxModule } from '@angular/material';

/* Component Import */
import { SupervisionComponent } from './supervision.component';
import { EvenementCourseComponent } from './evenement-course/evenement-course.component';
import { PanneComponent } from './panne/panne.component';
import { TicketComponent } from './ticket/ticket.component';
import { VoucherComponent } from './voucher/voucher.component';

@NgModule({
  imports: [
    CommonModule,
    SupervisionRoutingModule,
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
      SupervisionComponent,
      EvenementCourseComponent,
      PanneComponent,
      TicketComponent,
      VoucherComponent
    ]
})
export class SupervisionModule { }

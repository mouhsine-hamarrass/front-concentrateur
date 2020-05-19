import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
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
  MatCardModule,
  MatRadioModule} from '@angular/material';
import { MessageTicketRoutingModule } from './message-ticket-routing.module';
import { NewMessageComponent } from './new-message-ticket/new-message.component';
import { MessageTicketComponent } from './message-ticket.component';


@NgModule({
  imports: [
    CommonModule,
    MessageTicketRoutingModule,
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
    MatCheckboxModule,
    MatRadioModule
  ],
  declarations: [MessageTicketComponent, NewMessageComponent],
  entryComponents : [NewMessageComponent]
}) 
export class MessageTicketModule { }

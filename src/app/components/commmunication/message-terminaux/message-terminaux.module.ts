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
import { MessageTerminauxRoutingModule } from './messge-terminaux-routing.module';
import { MessageTerminauxComponent } from './message-terminaux.component';
import { NewTerminalComponent } from './new-message-terminal/new-terminal.component';


@NgModule({
  imports: [
    CommonModule,
    MessageTerminauxRoutingModule,
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
  declarations: [MessageTerminauxComponent, NewTerminalComponent],
  entryComponents : [NewTerminalComponent]
}) 
export class MessageTerminauxModule { }

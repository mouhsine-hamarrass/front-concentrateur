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
  MatCardModule} from '@angular/material';
import { SmtpRoutingModule } from './smtp-routing.module';
import { SmtpComponent } from './smtp.component';

@NgModule({
  imports: [
    CommonModule,
    SmtpRoutingModule,
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
  declarations: [SmtpComponent],
  entryComponents : []
})
export class SmtpModule { }

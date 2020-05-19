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
import { CommandeSensibleRoutingModule } from './commande-sensible-routing.module';
import { CommandeSensibleComponent } from './commande-sensible.component';


@NgModule({
  imports: [
    CommonModule,
    CommandeSensibleRoutingModule,
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
  declarations: [CommandeSensibleComponent],
  entryComponents : []
})
export class CommandeSensibleModule { }

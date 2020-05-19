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
  MatTooltipModule,
  MatRadioModule,
  MatCardModule} from '@angular/material';
import { PdvRoutingModule } from './pdv-routing.module';
import { PdvComponent } from './pdv.component';
import { ViewEditPdvComponent } from './view-edit-pdv/view-edit-pdv.component';
import { NewPdvComponent } from './new-pdv/new-pdv.component';


@NgModule({
  imports: [
    CommonModule,
    PdvRoutingModule,
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
    MatTooltipModule,
    MatRadioModule,
    MatCardModule
  ],
  declarations: [PdvComponent, ViewEditPdvComponent, NewPdvComponent],
  entryComponents : [ViewEditPdvComponent,NewPdvComponent]
})
export class PdvModule { }

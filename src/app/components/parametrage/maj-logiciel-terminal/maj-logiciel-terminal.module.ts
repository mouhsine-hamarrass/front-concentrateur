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
import { MajLogicielTerminalRoutingModule } from './maj-logiciel-terminal-routing.module';
import { MajLogicielTerminalComponent } from './maj-logiciel-terminal.component';
import { ChargementVersionComponent } from './chargement-version/chargement-version.component';
import { VersionAutoriseeComponent } from './version-autorisee/version-autorisee.component';


@NgModule({
  imports: [
    CommonModule,
    MajLogicielTerminalRoutingModule,
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
  declarations: [MajLogicielTerminalComponent, ChargementVersionComponent, VersionAutoriseeComponent],
  entryComponents : []
})
export class MajLogicielTerminalModule { }

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
import { ProduitConcentrateurRoutingModule } from './produit-concentrateur-routing.module';
import { ProduitConcentrateurComponent } from './produit-concentrateur.component';


@NgModule({
  imports: [
    CommonModule,
    ProduitConcentrateurRoutingModule,
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
  declarations: [ProduitConcentrateurComponent],
  entryComponents : []
})
export class ProduitConcentrateurModule { }

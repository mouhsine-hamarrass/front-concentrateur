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
import { ImportFichierComponent } from './import-fichier/import-fichier.component';
import { PagePrincipaleRoutingModule } from './page-principale-routing.module';
import { PagePrincipaleComponent } from './page-principale.component';


@NgModule({
  imports: [
    CommonModule,
    PagePrincipaleRoutingModule,
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
  declarations: [PagePrincipaleComponent,ImportFichierComponent],
  entryComponents : [ImportFichierComponent]
})
export class PagePrincipaleModule { }

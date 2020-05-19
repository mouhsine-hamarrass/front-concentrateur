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
  MatRadioModule} from '@angular/material';
import { VoucherRoutingModule } from './voucher-routing.module';
import { VoucherComponent } from './voucher.component';


@NgModule({
  imports: [
    CommonModule,
    VoucherRoutingModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  declarations: [VoucherComponent],
  entryComponents : []
})
export class VoucherModule { }

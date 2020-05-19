import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Voucher } from 'src/app/shared/models/voucher.model';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.scss']
})
export class VoucherComponent implements OnInit {

  voucherList:boolean = false;
  displayedColumns: string[] = ['agence', 'pdv', 'numero',  'heure', 'valeur','statut','action'];
  dataSource: MatTableDataSource<Voucher>;
  vouchers:Array<Voucher>;

  constructor() { }

  ngOnInit() {
    
    this.createCoursesService();
    this.dataSource = new MatTableDataSource(this.vouchers);
  }

  rechercheVoucher(){
    this.voucherList = true
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createCoursesService(){
    this.vouchers = [];
    let voucher1:Voucher = new Voucher('Rabat','PDV1','2938475','12:24:36','R1C1 SP-JP','Non Paye');
    let voucher2:Voucher = new Voucher('Rabat','PDV2','2938476','12:24:49','R1C1 SP-JP','Non Paye');
    let voucher3:Voucher = new Voucher('Anfa','PDV8','2938489','12:25:28','R1C1 SP-JP','Non Paye');
    this.vouchers.push(voucher1);
    this.vouchers.push(voucher2);
    this.vouchers.push(voucher3);
  }

}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { VoucherParametrage } from 'src/app/shared/models/voucher-parametrage.model';

@Component({
  selector: 'app-voucher',
  templateUrl: './voucher.component.html',
  styleUrls: ['./voucher.component.scss']
})
export class VoucherComponent implements OnInit {

  voucherPanel:boolean = false;
  displayedColumns: string[] = ['statut', 'voucherSeuil', 'plafond',  'delaisPurge', 'lieuPaimement', 'actions'];
  dataSource: MatTableDataSource<VoucherParametrage>;
  vouchers: Array<VoucherParametrage>;

  constructor() { }

  ngOnInit() {
    this.createVoucherService();
    this.dataSource = new MatTableDataSource(this.vouchers);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createVoucherService(){
    this.vouchers = [];
    let vouchers1:VoucherParametrage = new VoucherParametrage('Actif',1,10000,30,'PDV lui-même et Agences');
    let vouchers2:VoucherParametrage = new VoucherParametrage('Inactif',2,150000,90,'PDV lui-même et Agences');
    this.vouchers.push(vouchers1);
    this.vouchers.push(vouchers2);
  }

  displayVoucherPanel(){
    this.voucherPanel = !this.voucherPanel;
  }
  
  newVoucher(){
    this.voucherPanel = false;
  }

}

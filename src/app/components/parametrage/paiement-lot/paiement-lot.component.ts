import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PaiementPrincipal } from 'src/app/shared/models/paiement-lot.model';

@Component({
  selector: 'app-paiement-lot',
  templateUrl: './paiement-lot.component.html',
  styleUrls: ['./paiement-lot.component.scss']
})
export class PaiementLotComponent implements OnInit {

  newPaiementLot:boolean = false;
  displayedColumns: string[] = ['code', 'typeLot', 'seuilLot',  'montantAvance', 'lieuPaimenet','lieuAnnulation','delaiPurge','action'];
  dataSource: MatTableDataSource<PaiementPrincipal>;
  paimementLots:Array<PaiementPrincipal>;

  constructor() { }

  ngOnInit() {
    this.createCoursesService();
    this.dataSource = new MatTableDataSource(this.paimementLots);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayNewPaiementLot(){
    this.newPaiementLot = !this.newPaiementLot;
  }

  createCoursesService(){
    this.paimementLots = [];
    let paiementLot1:PaiementPrincipal = new PaiementPrincipal('01','Petit',0,0,'PDV lui même et agence Rattach','PDV lui même et agence Rattach',7);
    let paiementLot2:PaiementPrincipal = new PaiementPrincipal('01','Gros',10000,3000,'Toute agences','Toute agences',7);
    let paiementLot3:PaiementPrincipal = new PaiementPrincipal('01','Gros',30000,4000,'Toute agences','Toute agences',7);
    this.paimementLots.push(paiementLot1);
    this.paimementLots.push(paiementLot2);
    this.paimementLots.push(paiementLot3);
  }

}

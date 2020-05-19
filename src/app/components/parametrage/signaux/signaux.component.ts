import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Signal } from 'src/app/shared/models/signaux.model';

@Component({
  selector: 'app-signaux',
  templateUrl: './signaux.component.html',
  styleUrls: ['./signaux.component.scss']
})
export class SignauxComponent implements OnInit {

  terminalPanel:boolean = false;
  dataSource: MatTableDataSource<Signal>;
  newSignalPanel:boolean = false;
  
  displayedColumns: string[] = ['code', 'designation', 'source',  'type', 'diffusion','action'];
  signaux: Array<Signal>;

  constructor() { }

  ngOnInit() {
    this.createSignauxService();
    this.dataSource = new MatTableDataSource(this.signaux);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createSignauxService(){
    this.signaux = [];
    let signal1:Signal = new Signal('Paiement','Produit en paiement',0,'PRODUIT','MA/FR');
    let signal2:Signal = new Signal('ArretVente','Vente course non autorisée',0,'COURSE','MA/FR');
    let signal3:Signal = new Signal('NonPartant','Cheval non partant',1,'CHEVAL','MA');
    this.signaux.push(signal1);
    this.signaux.push(signal2);
    this.signaux.push(signal3);
  }

  displayNewSignal(){
    this.newSignalPanel = !this.newSignalPanel;
  }

  newSignal(){
    this.newSignalPanel = true
  }

}

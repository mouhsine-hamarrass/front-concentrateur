import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { PDV } from 'src/app/shared/models/pdv.model';

@Component({
  selector: 'app-terminaux',
  templateUrl: './terminaux.component.html',
  styleUrls: ['./terminaux.component.scss']
})
export class TerminauxComponent implements OnInit {

  terminalPanel:boolean = false;
  dataSource: MatTableDataSource<PDV>;
  updateStart:boolean = false;
  
  displayedColumns: string[] = ['agence', 'pdv', 'terminal',  'version', 'statut','action'];
  pdvs: Array<PDV>;
  constructor() { }

  ngOnInit() {
    this.createPDVService();
    this.dataSource = new MatTableDataSource(this.pdvs);
  }

  consultationTerminal(){
    this.terminalPanel = true;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createPDVService(){
    this.pdvs = [];
    let pdv1:PDV = new PDV('SIEGE','R40-Café Agdal','2020','V 0.1.1');
    this.pdvs.push(pdv1);
  }

  runUpdate(){
    this.updateStart = true
  }

}

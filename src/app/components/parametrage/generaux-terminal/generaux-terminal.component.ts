import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { GenerauxTerminaux } from 'src/app/shared/models/generauxTicket.model';

@Component({
  selector: 'app-generaux-terminal',
  templateUrl: './generaux-terminal.component.html',
  styleUrls: ['./generaux-terminal.component.scss']
})
export class GenerauxTerminalComponent implements OnInit {

  parametreGenerauxPanel:boolean = false;
  displayedColumns: string[] = ['pdv', 'position', 'ip',  'autoPaiement', 'autoCreation', 'actions'];
  dataSource: MatTableDataSource<GenerauxTerminaux>;
  generauxTerminauxs: Array<GenerauxTerminaux>;

  constructor() { }

  ngOnInit() {
    this.createGenerauxTerminalService();
    this.dataSource = new MatTableDataSource(this.generauxTerminauxs);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createGenerauxTerminalService(){
    this.generauxTerminauxs = [];
    let generauxTerminaux1:GenerauxTerminaux = new GenerauxTerminaux('001','01','145.15.3.2/24',true,true);
    let generauxTerminaux2:GenerauxTerminaux = new GenerauxTerminaux('024','13','176.155.3.14/17',false,false);
    this.generauxTerminauxs.push(generauxTerminaux1);
    this.generauxTerminauxs.push(generauxTerminaux2);
  }

  displayParametreGenerauxPanel(){
    this.parametreGenerauxPanel = !this.parametreGenerauxPanel;
  }
  
  newGeneralTerminal(){
    this.parametreGenerauxPanel = false;
  }

}

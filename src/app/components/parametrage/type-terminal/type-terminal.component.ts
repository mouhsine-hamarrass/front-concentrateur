import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { TypeTerminal } from 'src/app/shared/models/type-terminal.model';

@Component({
  selector: 'app-type-terminal',
  templateUrl: './type-terminal.component.html',
  styleUrls: ['./type-terminal.component.scss']
})
export class TypeTerminalComponent implements OnInit {

  displayedColumns: string[] = ['code', 'libelle', 'action'];
  dataSource: MatTableDataSource<TypeTerminal>;
  typeTerminauxs: Array<TypeTerminal>;
  newTypeTerminalPanel:boolean = false;

  constructor() { }

  ngOnInit() {
    this.createTypeTerminalService();
    this.dataSource = new MatTableDataSource(this.typeTerminauxs);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage(); 
    } 
  }

  createTypeTerminalService(){
    this.typeTerminauxs = [];
    let typeTerminal1:TypeTerminal = new TypeTerminal(1,'TER 2020');
    let typeTerminal2:TypeTerminal = new TypeTerminal(2,'TER 2030');
    let typeTerminal3:TypeTerminal = new TypeTerminal(3,'TER 2062');
    let typeTerminal4:TypeTerminal = new TypeTerminal(4,'PDA');
    this.typeTerminauxs.push(typeTerminal1);
    this.typeTerminauxs.push(typeTerminal2);
    this.typeTerminauxs.push(typeTerminal3);
    this.typeTerminauxs.push(typeTerminal4);
  }

  displayTypeTerminalPanel(){
    this.newTypeTerminalPanel = !this.newTypeTerminalPanel
  }

  addNewTypeTerminal(){
    this.newTypeTerminalPanel = false;
  }

}

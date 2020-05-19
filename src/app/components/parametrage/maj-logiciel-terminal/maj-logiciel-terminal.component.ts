import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ChargementVersion } from 'src/app/shared/models/chargement-version.model';

@Component({
  selector: 'app-maj-logiciel-terminal',
  templateUrl: './maj-logiciel-terminal.component.html',
  styleUrls: ['./maj-logiciel-terminal.component.scss']
})
export class MajLogicielTerminalComponent implements OnInit {

  changementVersion:boolean  = false;
  versionAutorise:boolean = false;
  ticketPannel:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  displayChargementversions(){
    this.changementVersion = !this.changementVersion;
    this.versionAutorise = false; 
  }

  displayVersionAutorisee(){
    this.versionAutorise = !this.versionAutorise;
    this.changementVersion = false;
  } 

}

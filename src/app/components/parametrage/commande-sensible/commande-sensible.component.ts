import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { CommandeSensible } from 'src/app/shared/models/commande-sensible.model';

@Component({
  selector: 'app-commande-sensible',
  templateUrl: './commande-sensible.component.html',
  styleUrls: ['./commande-sensible.component.scss']
})
export class CommandeSensibleComponent implements OnInit {

  displayedColumns: string[] = ['code', 'libelle', 'action'];
  dataSource: MatTableDataSource<CommandeSensible>;
  commandeSensibles: Array<CommandeSensible>;
  newCommandeSensiblePanel:boolean = false;

  constructor() { }

  ngOnInit() {
    this.createCommandeSensibleService();
    this.dataSource = new MatTableDataSource(this.commandeSensibles);
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    } 
  }

  createCommandeSensibleService(){
    this.commandeSensibles = [];
    let commandeSensible1:CommandeSensible = new CommandeSensible('CMD01','Commande annulation Exp');
    let commandeSensible2:CommandeSensible = new CommandeSensible('CMD02','Commande Forcage Rapport');
    let commandeSensible3:CommandeSensible = new CommandeSensible('CMD03','Commande paiement manuel');
    this.commandeSensibles.push(commandeSensible1);
    this.commandeSensibles.push(commandeSensible2);
    this.commandeSensibles.push(commandeSensible3);
  }

  displayNewCommandeSensiblePanel(){
    this.newCommandeSensiblePanel = !this.newCommandeSensiblePanel
  }

  addNewCommandeSensisble(){
    this.newCommandeSensiblePanel = false;
  }

}

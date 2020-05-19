import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Hippodrome } from 'src/app/shared/models/hippodome.model';

@Component({
  selector: 'app-hippodrome',
  templateUrl: './hippodrome.component.html',
  styleUrls: ['./hippodrome.component.scss']
})
export class HippodromeComponent implements OnInit {

  displayedColumns: string[] = ['code', 'abreviation', 'pays', 'action'];
  dataSource: MatTableDataSource<Hippodrome>;
  hippodromes: Array<Hippodrome>;
  newHippodromePanel:boolean = false;

  constructor() { }

  ngOnInit() {
    this.createCommunicationTicketService();
    this.dataSource = new MatTableDataSource(this.hippodromes);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createCommunicationTicketService(){
    this.hippodromes = [];
    let hippodrome1:Hippodrome = new Hippodrome('CBA','CASA ANFA','MA');
    let hippodrome2:Hippodrome = new Hippodrome('LON','LONGCHAMP','FR');
    this.hippodromes.push(hippodrome1);
    this.hippodromes.push(hippodrome2);
  }

  displayNewHippodrome(){
    this.newHippodromePanel = !this.newHippodromePanel;
  }

  addNewHipprome(){
    this.newHippodromePanel = false;
  }

  cancelAddNewHipprome(){
    this.newHippodromePanel = false;
  }

}

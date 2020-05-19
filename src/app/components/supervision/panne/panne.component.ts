import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Panne } from 'src/app/shared/models/panne.model';

@Component({
  selector: 'app-panne',
  templateUrl: './panne.component.html',
  styleUrls: ['./panne.component.scss']
})
export class PanneComponent implements OnInit {

  panneList:boolean = false;
  displayedColumns: string[] = ['agence', 'pdv', 'terminal',  'panne', 'heure'];
  dataSource: MatTableDataSource<Panne>;
  pannes:Array<Panne>;

  constructor() { }

  ngOnInit() {
    this.createPannesService();
    this.dataSource = new MatTableDataSource(this.pannes);
  }

  recherchePannet(){
    this.panneList = true
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createPannesService(){
    this.pannes = [];
    let panne1:Panne = new Panne('Rabat','PDV1','Terminal-01','Connexion réseau','10:25:36');
    let panne2:Panne = new Panne('Rabat','PDV1','Terminal-01','Connexion réseau','10:26:40');
    let panne3:Panne = new Panne('Anfa','PDV12','Terminal-05','Imprimente','17:55:56');
    this.pannes.push(panne1);
    this.pannes.push(panne2);
    this.pannes.push(panne3);
  }


}

import { Component, OnInit } from '@angular/core';
import { TypePdv } from 'src/app/shared/models/type-pdv.model';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-type-pdv',
  templateUrl: './type-pdv.component.html',
  styleUrls: ['./type-pdv.component.scss']
})
export class TypePdvComponent implements OnInit {

  displayedColumns: string[] = ['ref', 'libelle', 'nbrmax', 'plafond', 'action'];
  dataSource: MatTableDataSource<TypePdv>;
  typePdvs: Array<TypePdv>;
  newPdvTypePanel:boolean = false;


  constructor() {
    this.createAttributaireService();
    this.dataSource = new MatTableDataSource(this.typePdvs);
   }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createAttributaireService(){
    this.typePdvs = [];
    let typePdv1:TypePdv = new TypePdv(1,'Agence',20,0);
    let typePdv2:TypePdv = new TypePdv(2,'Agence Virtelle',1,0);
    let typePdv3:TypePdv = new TypePdv(3,'PDV Franchisé',3,20000);
    let typePdv4:TypePdv = new TypePdv(4,'Hippodrome',10,0);
    this.typePdvs.push(typePdv1);
    this.typePdvs.push(typePdv2);
    this.typePdvs.push(typePdv3);
    this.typePdvs.push(typePdv4);
  }

  displayNewPdvTypePanel(){
    this.newPdvTypePanel = !this.newPdvTypePanel
  }

  addNewTypePdv(){
    this.newPdvTypePanel = false;
  }

}

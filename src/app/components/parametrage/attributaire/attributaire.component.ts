import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { AttributaireModel } from 'src/app/shared/models/attributaire.model';

@Component({
  selector: 'app-attributaire',
  templateUrl: './attributaire.component.html',
  styleUrls: ['./attributaire.component.scss']
})
export class AttributaireComponent implements OnInit {

  displayedColumns: string[] = ['code', 'libelle', 'produitma', 'produitfr', 'action'];
  dataSource: MatTableDataSource<AttributaireModel>;
  attributaires: Array<AttributaireModel>;
  newAttributairePanel:boolean = false;

  constructor() { }

  ngOnInit() {
    this.createAttributaireService();
    this.dataSource = new MatTableDataSource(this.attributaires);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createAttributaireService(){
    this.attributaires = [];
    let attributaire1:AttributaireModel = new AttributaireModel(1,'ALL','GAG,SP,SG,JP,JG','GAG,SP,SG,JP,JG');
    let attributaire2:AttributaireModel = new AttributaireModel(2,'Hipp','GAG,SP,SG,JP,JG','GAG,SP,SG,JP,JG');
    this.attributaires.push(attributaire1);
    this.attributaires.push(attributaire2);
  }

  displayNewAttriibutairePanel(){
    this.newAttributairePanel = !this.newAttributairePanel
  }

  addNewAttributaire(){
    this.newAttributairePanel = false;
  }

}

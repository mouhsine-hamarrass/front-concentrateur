import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { DelaisAnnulation } from 'src/app/shared/models/delais-annulation.model';

@Component({
  selector: 'app-delais-annulation',
  templateUrl: './delais-annulation.component.html',
  styleUrls: ['./delais-annulation.component.scss']
})
export class DelaisAnnulationComponent implements OnInit {

  displayedColumns: string[] = ['code', 'description', 'valeur', 'statut' ,'action'];
  dataSource: MatTableDataSource<DelaisAnnulation>;
  delaisAnnulations: Array<DelaisAnnulation>;

  constructor() { }

  ngOnInit() {
    this.createCommandeSensibleService();
    this.dataSource = new MatTableDataSource(this.delaisAnnulations);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    } 
  }

  createCommandeSensibleService(){
    this.delaisAnnulations = [];
    let delaisAnnulation1:DelaisAnnulation = new DelaisAnnulation('01','Délai aprés enregistrement',5,'Actif');
    let delaisAnnulation2:DelaisAnnulation = new DelaisAnnulation('02','Délai avant départ',5,'Inactif');
    this.delaisAnnulations.push(delaisAnnulation1);
    this.delaisAnnulations.push(delaisAnnulation2);
  }


}

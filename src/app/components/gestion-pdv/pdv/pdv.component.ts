import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { PDV } from 'src/app/shared/models/pdv.model';
import { ViewEditPdvComponent } from './view-edit-pdv/view-edit-pdv.component';
import { NewPdvComponent } from './new-pdv/new-pdv.component';

@Component({
  selector: 'app-pdv',
  templateUrl: './pdv.component.html',
  styleUrls: ['./pdv.component.scss']
})
export class PdvComponent implements OnInit {

  displayConsultationPanel:boolean = false;
  displayedColumns: string[] = ['agence', 'pdv', 'ville',  'statut', 'action'];
  dataSource: MatTableDataSource<PDV>;
  pdvs: Array<PDV>;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.createPDVService();
    this.dataSource = new MatTableDataSource(this.pdvs);
  }

  consultationPDV(){
    this.displayConsultationPanel = true;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createPDVService(){
    this.pdvs = [];
    let pdv1:PDV = new PDV('SIEGE','R40-Café Agdal','Rabat','Suspendu');
    let pdv2:PDV = new PDV('Takedoume','R4-Café NAHDA','Rabat','Active');
    let pdv3:PDV = new PDV('Temara','P05-Café Anzar','Temara','Ferme');
    this.pdvs.push(pdv1);
    this.pdvs.push(pdv2);
    this.pdvs.push(pdv3);
  }

  miseAJourTerinaux(){
    // TODO
  }

  newPDV(){
    this.dialog.open(NewPdvComponent,{
      width: '90%',
      height: '90%'
    })
  }

  launchViewUpdatePDV(row){
    this.dialog.open(ViewEditPdvComponent, {
      width: '90%',
      height: '90%'
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Course } from 'src/app/shared/models/course.model';
import { RepartitionRapportDialogComponent } from './repartition-rapport-dialog/repartition-rapport-dialog.component';

@Component({
  selector: 'app-pilotage',
  templateUrl: './pilotage.component.html',
  styleUrls: ['./pilotage.component.scss']
})
export class PilotageComponent implements OnInit {
  
  selectedEtatDe:any;
  selectedEtatA:any;
  selectedReunion:any;
  selectedEtat:any;
  displayedColumns: string[] = ['reunion', 'hippodrome',  'courseOrder', 'heureDepart','arrivee','statut','action'];
  dataSource: MatTableDataSource<Course>;
  courses:Array<Course>;
  displaycoursesTable:boolean = false;
  partantNonPartant:boolean = false;
  miseAJour:boolean = false;
  rowSelected:Course;
  repartition:boolean = false;
  suspendreVentePaiment:boolean = false;
  produitList: string[] = ['Simple Gagnant', 'Simple Placé', 'Jumlé Gagnant', 'Jumlé Placé', 'Tircé', 'Trio', 'Quarté', 'Quarté +', 'Quinté', 'Quinté +'];
  produits:any;


  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.createCoursesService();
    this.dataSource = new MatTableDataSource(this.courses);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayCoursesTableFunction(){
    this.displaycoursesTable = true;
  }

  createCoursesService(){
    this.courses = [];
    let course1:Course = new Course('R1','Vincennes','C1',new Date(),'GAG-SG-SP',null,'En Cours','red','FR',10,'1,2,3,4,5,6','Depart');
    let course2:Course = new Course('R2','El Jadida','C4',new Date(),'GAG-SG-SP-JG-JP-TRIO',null,'En Cours','red','FR',10,'2,5,8,9,6,3','Paiment');
    let course3:Course = new Course('R3','ANFA','C5',new Date(),'GAG-SG-SP-JG-JP-TRIO',null,'Active','green','FR',16,'7,8,9,3,2,1,4,5,6','Depart');
    let course4:Course = new Course('R6','Oujda','C3',new Date(),'GAG-SG-SP-JG-JP-TRIO',null,'Active','green','FR',16,'3,6,5,2,1,4,8,9,7','Arrivee Definitive');
    let course5:Course = new Course('R8','Paris','C8',new Date(),'GAG-SG-SP-JG-JP-TRIO',null,'Active','green','FR',16,'5,4,1,2,8,7,9,6,3','Arrivee Provisoire');
    this.courses.push(course1);
    this.courses.push(course2);
    this.courses.push(course3);
    this.courses.push(course4);
    this.courses.push(course5);
  }

  displayPartantNonPartant(row){
    this.rowSelected = row;
    this.partantNonPartant = true;
    this.miseAJour = false;
    this.repartition = false;
    this.suspendreVentePaiment = false;
  }

  hidePartantNonPartant(){
    this.partantNonPartant = false;
  }

  displayMiseAjourStatut(row){
    this.rowSelected = row;
    this.miseAJour = true;
    this.partantNonPartant = false;
    this.repartition = false
    this.suspendreVentePaiment = false;
  }

  hideMiseAjour(){
    this.miseAJour = false;
  }

  displayRepartition(row){
    this.rowSelected = row;
    this.repartition = true;
    this.miseAJour = false;
    this.partantNonPartant = false;
    this.suspendreVentePaiment= false;
  }

  hideRepartition(){
    this.repartition = false;
  }

  displayRepartitionDialog(row){
    const dialogRef = this.dialog.open(RepartitionRapportDialogComponent, {
      width: '80%',
      height: '90%',
      data: row
    });
  }

  displaySuspendeVentePaiement(row){
    this.rowSelected = row
    this.suspendreVentePaiment = true;
    this.repartition = false;
    this.miseAJour = false;
    this.partantNonPartant = false;
  }

  hideSuspendeVentePaiement(){
    window.confirm("Vous etes sur de votre choix ?")
    this.suspendreVentePaiment = false;
  }

}

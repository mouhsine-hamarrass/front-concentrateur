import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Course } from 'src/app/shared/models/course.model';

@Component({
  selector: 'app-validation-offre',
  templateUrl: './validation-offre.component.html',
  styleUrls: ['./validation-offre.component.scss']
})
export class ValidationOffreComponent implements OnInit {

  selectedReunion:any;
  selectedEtat:any;
  displayedColumns: string[] = ['reunion', 'hippodrome', 'diffusion',  'courseOrder', 'heureDepart','produit','etat','action'];
  dataSource: MatTableDataSource<Course>;
  courses:Array<Course>;
  displaycoursesTable:boolean = false;
  acceptOrRefuseOffre:boolean = false;

  constructor() { }

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
    let course1:Course = new Course('R1','Vincennes','C1',new Date(),'GAG-SG-SP',null,'Validée','green','FR',10);
    let course2:Course = new Course('R2','El Jadida','C4',new Date(),'GAG-SG-SP-JG-JP-TRIO',null,'Validée','green','FR',10);
    this.courses.push(course1);
    this.courses.push(course2);
  }

  improveProposition(){
    window.alert('Offre Accepter !!');
    this.acceptOrRefuseOffre = true
  }

  dismissAcceptation(){
    window.alert('Offre Rejeter !!');
    this.acceptOrRefuseOffre = true
  }

}

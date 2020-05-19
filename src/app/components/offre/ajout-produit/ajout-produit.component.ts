import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Course } from 'src/app/shared/models/course.model';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.scss']
})
export class AjoutProduitComponent implements OnInit {

  displayedColumns: string[] = ['reunion', 'hippodrome', 'diffusion',  'courseOrder', 'heureDepart','produit','etat','action'];
  dataSource: MatTableDataSource<Course>;
  displaycoursesTable:boolean = false;
  courses:Array<Course>;
  displayAddProduct:boolean = false;
  selectedCourse:Course;

  constructor() {
    
   }

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

  createCoursesService(){
    this.courses = [];
    let course1:Course = new Course('R1','Vincennes','C1',new Date(),'GAG',null,'En Cours','green','FR',10);
    let course2:Course = new Course('R2','El Jadida','C4',new Date(),'GAG-SG-SP-',null,'En Cours','green','FR',10);
    this.courses.push(course1);
    this.courses.push(course2);
  }

  displayCoursesTableFunction(){
    this.displaycoursesTable = true;
  }

  addProductToCourse(row){
    this.displayAddProduct = true;
    this.selectedCourse = row;
  }

  addProduitToCourse(){
    this.displayAddProduct = false;
  }

  cancelAddProduitToCourse(){
    this.displayAddProduct = false;
  }

}

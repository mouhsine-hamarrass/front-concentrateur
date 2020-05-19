import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { Course } from 'src/app/shared/models/course.model';
import { ImportFichierComponent } from './import-fichier/import-fichier.component';

@Component({
  selector: 'app-page-principale',
  templateUrl: './page-principale.component.html',
  styleUrls: ['./page-principale.component.scss']
})
export class PagePrincipaleComponent implements OnInit {

  selectedReunion:any;
  selectedEtat:any;
  displayedColumns: string[] = ['reunion', 'hippodrome', 'diffusion',  'courseOrder', 'heureDepart','produit','etat','action'];
  dataSource: MatTableDataSource<Course>;
  courses:Array<Course>;

  displaycoursesTable:boolean = false;

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
    let course1:Course = new Course('R1','Vincennes','C1',new Date(),'GAG-SG-SP',null,'En Cours','red','FR',10);
    let course2:Course = new Course('R2','El Jadida','C4',new Date(),'GAG-SG-SP-JG-JP-TRIO',null,'En Cours','red','FR',10);
    let course3:Course = new Course('R3','ANFA','C4',new Date(),'GAG-SG-SP-JG-JP-TRIO',null,'Active','green','FR',16);
    this.courses.push(course1);
    this.courses.push(course2);
    this.courses.push(course3);
  }

  importationFichier(){
    const dialogRef = this.dialog.open(ImportFichierComponent, {
      width: '85%',
      height: '95%',
      data: this.courses
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}

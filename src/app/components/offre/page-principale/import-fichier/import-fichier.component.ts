import { Component, OnInit, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Course } from 'src/app/shared/models/course.model';


@Component({
  selector: 'app-import-fichier',
  templateUrl: './import-fichier.component.html',
  styleUrls: ['./import-fichier.component.scss']
})
export class ImportFichierComponent implements OnInit {
  
  selectedDate:any;
  selectedType:any;
  displayReunionTable:boolean = false;
  displayAffectCourses:boolean = false;
  displaySaisieManuelle: boolean = false;

  selectedDateSaisie:string;
  produits = new FormControl();
  produitList: string[] = ['SG', 'JG', 'JP', 'GAG', 'TRIO', 'TIRCE', 'QUARTE' , 'QUARTE +' , 'QUINTE', 'QUINTE +'];

  constructor(public dialogRef: MatDialogRef<ImportFichierComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Course) { }

  ngOnInit() {
  }

  displayReunionTableFunction(){
    this.displayReunionTable = !this.displayReunionTable;
    this.displaySaisieManuelle = false;
  }

  displaySaisieManuelleFunction(){
    this.displaySaisieManuelle = !this.displaySaisieManuelle;
    this.displayReunionTable = false;
  }

  opendownstares(){
    this.displayAffectCourses = !this.displayAffectCourses;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ValidateAction(){
    this.dialogRef.close();
  }

}

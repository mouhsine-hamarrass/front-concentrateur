import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PDV } from 'src/app/shared/models/pdv.model';

@Component({
  selector: 'app-view-edit-pdv',
  templateUrl: './view-edit-pdv.component.html',
  styleUrls: ['./view-edit-pdv.component.scss']
})
export class ViewEditPdvComponent implements OnInit {

  enableUpdate:boolean = true
  prepaye:string = 'true'
  postpaye:string = 'false'
  constructor(
    public dialogRef: MatDialogRef<ViewEditPdvComponent>) { }

  ngOnInit() {
  }

  miseAJourPDV(){
    this.enableUpdate = !this.enableUpdate; 
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ValidateAction(){
    this.dialogRef.close();
  }
}

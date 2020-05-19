import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewMessageComponent>) { }

  ngOnInit() {
  }
 
  onNoClick(){
    this.dialogRef.close();
  }

  ValidateAction(){
    this.dialogRef.close();
  }

}

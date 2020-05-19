import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-new-terminal',
  templateUrl: './new-terminal.component.html',
  styleUrls: ['./new-terminal.component.scss']
})
export class NewTerminalComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<NewTerminalComponent>) { }

  ngOnInit() {
  }

  onNoClick(){
    this.dialogRef.close();
  }

  ValidateAction(){
    this.dialogRef.close();
  }

}

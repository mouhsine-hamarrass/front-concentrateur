import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Terminal } from 'src/app/shared/models/terminal.model';

@Component({
  selector: 'app-new-pdv',
  templateUrl: './new-pdv.component.html',
  styleUrls: ['./new-pdv.component.scss']
})
export class NewPdvComponent implements OnInit {

  prepaye:boolean;
  postPaye:boolean;
  positionTerminalPanel:boolean = false;
  terminal:Terminal = new Terminal('',null,'','',false,false);
  terminaux:Array<Terminal> = []
  password:string;
  terminalType:string[] = ['2020','2062','PDA']

  constructor(public dialogRef: MatDialogRef<NewPdvComponent>) { }

  ngOnInit() {
  }

  createNewPDV(){

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ValidateAction(){
    this.dialogRef.close();
  }

  addPositionTerminal(){
    this.positionTerminalPanel = true;
  }

  addTerminal(){
    this.terminaux.push(this.terminal);
    this.terminal = new Terminal('',null,'','',false,false);
    this.password = '';
  }

}

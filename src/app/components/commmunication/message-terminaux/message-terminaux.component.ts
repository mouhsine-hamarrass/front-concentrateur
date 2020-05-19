import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CommunicationTicket } from 'src/app/shared/models/communication-ticket.model';
import { NewTerminalComponent } from './new-message-terminal/new-terminal.component';
import { CommunicationTerminal } from 'src/app/shared/models/communication-terminal.model';

@Component({
  selector: 'app-message-terminaux',
  templateUrl: './message-terminaux.component.html',
  styleUrls: ['./message-terminaux.component.scss']
})
export class MessageTerminauxComponent implements OnInit {

  ticketPannel:boolean = false;
  displayedColumns: string[] = ['date', 'objectMessage', 'generalIndividuel',  'etat', 'dateDebut', 'dateFin'];
  dataSource: MatTableDataSource<CommunicationTerminal>;
  communicationTerminaux: Array<CommunicationTerminal>;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.createCommunicationTicketService();
    this.dataSource = new MatTableDataSource(this.communicationTerminaux);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createCommunicationTicketService(){
    this.communicationTerminaux = [];
    let communicationTerminal1:CommunicationTerminal = new CommunicationTerminal(new Date(),'Objet Message 1',true,false,true,new Date(),new Date());
    let communicationTerminal2:CommunicationTerminal = new CommunicationTerminal(new Date(),'Objet Message 2',false,true,false,new Date(),new Date());
    let communicationTerminal3:CommunicationTerminal = new CommunicationTerminal(new Date(),'Objet Message 3',true,false,true,new Date(),new Date());
    this.communicationTerminaux.push(communicationTerminal1);
    this.communicationTerminaux.push(communicationTerminal2);
    this.communicationTerminaux.push(communicationTerminal3);
  }

  displayTicketPannel(){
    this.ticketPannel = true;
  }

  newMessage(){
    this.dialog.open(NewTerminalComponent,{
      width: '40%',
      height: '70%'
    })
  }

}

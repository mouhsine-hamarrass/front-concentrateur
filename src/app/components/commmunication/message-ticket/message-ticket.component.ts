import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatDialog } from '@angular/material';
import { CommunicationTicket } from 'src/app/shared/models/communication-ticket.model';
import { NewMessageComponent } from './new-message-ticket/new-message.component';

@Component({
  selector: 'app-message-ticket',
  templateUrl: './message-ticket.component.html',
  styleUrls: ['./message-ticket.component.scss']
})
export class MessageTicketComponent implements OnInit {

  ticketPannel:boolean = false;
  displayedColumns: string[] = ['date', 'objectMessage', 'generalIndividuel',  'etat', 'dateDebut', 'dateFin'];
  dataSource: MatTableDataSource<CommunicationTicket>;
  communicationTickets: Array<CommunicationTicket>;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.createCommunicationTicketService();
    this.dataSource = new MatTableDataSource(this.communicationTickets);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createCommunicationTicketService(){
    this.communicationTickets = [];
    let communicationTicket1:CommunicationTicket = new CommunicationTicket(new Date(),'Objet Message 1',true,false,true,new Date(),new Date());
    let communicationTicket2:CommunicationTicket = new CommunicationTicket(new Date(),'Objet Message 2',false,true,false,new Date(),new Date());
    let communicationTicket3:CommunicationTicket = new CommunicationTicket(new Date(),'Objet Message 3',true,false,true,new Date(),new Date());
    this.communicationTickets.push(communicationTicket1);
    this.communicationTickets.push(communicationTicket2);
    this.communicationTickets.push(communicationTicket3);
  }

  displayTicketPannel(){
    this.ticketPannel = true;
  }

  newMessage(){
    this.dialog.open(NewMessageComponent,{
      width: '40%',
      height: '70%'
    })
  }

}

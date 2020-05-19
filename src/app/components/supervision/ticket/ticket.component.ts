import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/models/course.model';
import { MatTableDataSource } from '@angular/material';
import { Ticket } from 'src/app/shared/models/ticket.model';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  ticketList:boolean = false; 
  displayedColumns: string[] = ['agence', 'pdv', 'nbrticket',  'heure', 'reunioncourseproduit','statut','enjeu','action'];
  dataSource: MatTableDataSource<Ticket>;
  tickets:Array<Ticket>;
  
  constructor() { }

  ngOnInit() {
    this.createTicketsService();
    this.dataSource = new MatTableDataSource(this.tickets);
  }


  rechercheTicket(){
    this.ticketList = true;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createTicketsService(){
    this.tickets = [];
    let ticket1:Ticket = new Ticket('Rabat','PDV1','2938475','12:24:36','R1C1 SP-JP','Non Paye','1000');
    let ticket2:Ticket = new Ticket('Rabat','PDV2','2938476','12:24:49','R1C1 SP-JP','Non Paye','200');
    let ticket3:Ticket = new Ticket('Anfa','PDV8','2938489','12:25:28','R1C1 SP-JP','Non Paye','600');
    this.tickets.push(ticket1);
    this.tickets.push(ticket2);
    this.tickets.push(ticket3);
  }

}

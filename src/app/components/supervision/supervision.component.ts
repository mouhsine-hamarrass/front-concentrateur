import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-supervision',
  templateUrl: './supervision.component.html',
  styleUrls: ['./supervision.component.scss']
})
export class SupervisionComponent implements OnInit {

  ticketPanel:boolean = false;
  voucherPannel:boolean = false;
  evenementPanel:boolean = false;
  pannePanel:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  displayTicketPannel(){
    this.ticketPanel = !this.ticketPanel;
    this.voucherPannel = false;
    this.evenementPanel = false;
    this.pannePanel = false;
  }

  displayVoucherPannel(){
    this.voucherPannel = !this.voucherPannel;
    this.ticketPanel = false;
    this.evenementPanel = false;
    this.pannePanel = false;
  }

  displayEvenementPanel(){
    this.evenementPanel = !this.evenementPanel;
    this.ticketPanel = false;
    this.voucherPannel = false;
    this.pannePanel = false;
  }

  displayPannePannel(){
    this.pannePanel = !this.pannePanel;
    this.evenementPanel = false;
    this.voucherPannel = false;
    this.ticketPanel = false;

  }
}

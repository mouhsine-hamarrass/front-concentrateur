import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { AlertMailModel } from 'src/app/shared/models/alert-mail.model';

@Component({
  selector: 'app-alert-mail',
  templateUrl: './alert-mail.component.html',
  styleUrls: ['./alert-mail.component.scss']
})
export class AlertMailComponent implements OnInit {

  displayedColumns: string[] = ['type', 'objet', 'adresse', 'action'];
  dataSource: MatTableDataSource<AlertMailModel>;
  alertMails: Array<AlertMailModel>;
  newAlertMailPanel:boolean = false;

  constructor() { }

  ngOnInit() {
    this.createCommunicationTicketService();
    this.dataSource = new MatTableDataSource(this.alertMails);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createCommunicationTicketService(){
    this.alertMails = [];
    let alert1:AlertMailModel = new AlertMailModel('transactions dépassant le seuil','Object 1','a@sorec.ma');
    let alert2:AlertMailModel = new AlertMailModel('Voucher depassant le seuil','Object 2','b@sorec.ma');
    let alert3:AlertMailModel = new AlertMailModel('Chiffre d\'affaire aprés Parit','Object 3','c@sorec.ma');
    let alert4:AlertMailModel = new AlertMailModel('Saisie commande sensible','Object 4','d@sorec.ma');
    this.alertMails.push(alert1);
    this.alertMails.push(alert2);
    this.alertMails.push(alert3);
    this.alertMails.push(alert4);
  }

  displayNewAlertMail(){
    this.newAlertMailPanel = !this.newAlertMailPanel
  }

  addNewAlert(){
    this.newAlertMailPanel = false;
  }
}

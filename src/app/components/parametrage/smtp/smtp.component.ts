import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Smtp } from 'src/app/shared/models/smtp.model';

@Component({
  selector: 'app-smtp',
  templateUrl: './smtp.component.html',
  styleUrls: ['./smtp.component.scss']
})
export class SmtpComponent implements OnInit {

  newSmtpConfiguration:boolean = false;
  displayedColumns: string[] = ['code', 'serverIp', 'authentification', 'statut','login','password','action'];
  dataSource: MatTableDataSource<Smtp>;
  smtpConfigurations : Array<Smtp> = [];

  constructor() { }

  ngOnInit() {
    this.createSmtpConfiguration()
    this.dataSource = new MatTableDataSource(this.smtpConfigurations)
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createSmtpConfiguration(){
    this.smtpConfigurations = [];
    let smtpConfiguration1 : Smtp = new Smtp('SRV_SMTP1','192.168.2.74/24','O','Actif','LogIn','*******');
    let smtpConfiguration2 : Smtp = new Smtp('SRV_SMTP2','172.16.15.6/25','O','Actif','SigIn','*******');
    this.smtpConfigurations.push(smtpConfiguration1)
    this.smtpConfigurations.push(smtpConfiguration2)    
  }

  displayNewSmtpConfigurationPanel(){
    this.newSmtpConfiguration = !this.newSmtpConfiguration;
  }

}

import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { VersionAutorisee } from 'src/app/shared/models/verion-autorisee.model';

@Component({
  selector: 'app-version-autorisee',
  templateUrl: './version-autorisee.component.html',
  styleUrls: ['./version-autorisee.component.scss']
})
export class VersionAutoriseeComponent implements OnInit {

  displayedColumns: string[] = ['ref', 'typeTerminal', 'version',  'date', 'action'];
  dataSource: MatTableDataSource<VersionAutorisee>;
  versionAutorisees: Array<VersionAutorisee>;
  newVersionAutoriseePanel:boolean = false;


  constructor() { }

  ngOnInit() {
    this.createVersionAutorisee();
    this.dataSource = new MatTableDataSource(this.versionAutorisees);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createVersionAutorisee(){
    this.versionAutorisees = [];
    let versionAutorisee1:VersionAutorisee = new VersionAutorisee('01','Terminal 2020','5.1.1', new Date());
    let versionAutorisee2:VersionAutorisee = new VersionAutorisee('02','Terminal 2030','5.1.1', new Date());
    let versionAutorisee3:VersionAutorisee = new VersionAutorisee('03','Terminal 2062','4.2.0', new Date());
    let versionAutorisee4:VersionAutorisee = new VersionAutorisee('03','PDA','1.3.1', new Date());
    this.versionAutorisees.push(versionAutorisee1);
    this.versionAutorisees.push(versionAutorisee2);
    this.versionAutorisees.push(versionAutorisee3);
    this.versionAutorisees.push(versionAutorisee4);
  }

  displayNewVersionAutorisee(){
    this.newVersionAutoriseePanel = !this.newVersionAutoriseePanel;
  }

  newVersionAutorisee(){
    this.newVersionAutoriseePanel = false;
  }

}

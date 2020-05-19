import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { ChargementVersion } from 'src/app/shared/models/chargement-version.model';

@Component({
  selector: 'app-chargement-version',
  templateUrl: './chargement-version.component.html',
  styleUrls: ['./chargement-version.component.scss']
})
export class ChargementVersionComponent implements OnInit {

  displayedColumns: string[] = ['ref', 'libelle', 'version',  'date', 'file', 'action'];
  dataSource: MatTableDataSource<ChargementVersion>;
  chargementVersions: Array<ChargementVersion>;
  newChargementVersionPanel:boolean = false;

  constructor() { }

  ngOnInit() {
    this.createChargementVersion();
    this.dataSource = new MatTableDataSource(this.chargementVersions);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  createChargementVersion(){
    this.chargementVersions = [];
    let chargementVersion1:ChargementVersion = new ChargementVersion('01','Terminal 2020','5.1.1', new Date(),'TER2020_5.1.1.1_30 01 2020');
    let chargementVersion2:ChargementVersion = new ChargementVersion('02','Terminal 2030','5.1.1', new Date(),'TER2020_5.1.1.1_30 01 2020');
    let chargementVersion3:ChargementVersion = new ChargementVersion('03','Terminal 2062','4.2.0', new Date(),'TER2062_5.1.1.1_30 01 2020');
    let chargementVersion4:ChargementVersion = new ChargementVersion('03','PDA','1.3.1', new Date(),'PDA_APK_3.2.24');
    this.chargementVersions.push(chargementVersion1);
    this.chargementVersions.push(chargementVersion2);
    this.chargementVersions.push(chargementVersion3);
    this.chargementVersions.push(chargementVersion4);
  }

  displayNewChargementVersion(){
    this.newChargementVersionPanel = !this.newChargementVersionPanel;
  }

  newChargementVersion(){
    this.newChargementVersionPanel = false;
  }

}

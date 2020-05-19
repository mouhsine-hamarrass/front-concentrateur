import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { TfjDialogComponent } from './tfj-dialog/tfj-dialog.component';


export class Tfj {
  date: Date;
  statut: string;
}


@Component({
  selector: 'app-tfj',
  templateUrl: './tfj.component.html',
  styleUrls: ['./tfj.component.scss']
})
export class TfjComponent implements OnInit {

  displayArchivement: boolean = false;
  displayedColumns: string[] = ['Date', 'STFJ', 'Action'];
  dataSource: MatTableDataSource<Tfj>;
  tfjs: Array<Tfj>;
  displayActionsHistory:boolean = false;

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort: MatSort;

  constructor( public dialog: MatDialog ) {
    this.createData();
    this.dataSource = new MatTableDataSource(this.tfjs);
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayArchivementFunction() {
    this.displayArchivement = true
  }

  createData() {
    this.tfjs = [];
    let tfj1: Tfj = {
      date: new Date('2020-04-22T00:00:00'),
      statut: "Terminer"
    }
    let tfj2: Tfj = {
      date: new Date(),
      statut: "En Cours"
    }
    this.tfjs.push(tfj1);
    this.tfjs.push(tfj2);
  }

  LaunchStorageLauncher(){
    const dialogRef = this.dialog.open(TfjDialogComponent, {
      width: '70%',
    });
  }

  displayActionsHistoryFunction(){
    this.displayActionsHistory = true;
  }

}

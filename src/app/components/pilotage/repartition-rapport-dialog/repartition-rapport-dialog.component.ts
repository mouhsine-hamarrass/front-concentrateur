import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Course } from 'src/app/shared/models/course.model';

@Component({
  selector: 'app-repartition-rapport-dialog',
  templateUrl: './repartition-rapport-dialog.component.html',
  styleUrls: ['./repartition-rapport-dialog.component.scss']
})
export class RepartitionRapportDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<RepartitionRapportDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public course: Course) { }

  ngOnInit() {
  }

}

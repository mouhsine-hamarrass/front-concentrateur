import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenement-course',
  templateUrl: './evenement-course.component.html',
  styleUrls: ['./evenement-course.component.scss']
})
export class EvenementCourseComponent implements OnInit {

  evenementList:boolean = false;

  constructor() { }

  ngOnInit() {
  }


  rechercheEvenement(){
    this.evenementList = true;
  }
}

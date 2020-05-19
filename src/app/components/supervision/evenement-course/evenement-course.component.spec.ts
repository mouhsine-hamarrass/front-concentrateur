import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementCourseComponent } from './evenement-course.component';

describe('EvenementCourseComponent', () => {
  let component: EvenementCourseComponent;
  let fixture: ComponentFixture<EvenementCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenementCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

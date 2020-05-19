import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommmunicationComponent } from './commmunication.component';

describe('CommmunicationComponent', () => {
  let component: CommmunicationComponent;
  let fixture: ComponentFixture<CommmunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommmunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommmunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertMailComponent } from './alert-mail.component';

describe('AlertMailComponent', () => {
  let component: AlertMailComponent;
  let fixture: ComponentFixture<AlertMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

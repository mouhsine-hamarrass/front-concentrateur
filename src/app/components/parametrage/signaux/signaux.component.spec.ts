import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignauxComponent } from './signaux.component';

describe('SignauxComponent', () => {
  let component: SignauxComponent;
  let fixture: ComponentFixture<SignauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

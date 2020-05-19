import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEditPdvComponent } from './view-edit-pdv.component';

describe('ViewEditPdvComponent', () => {
  let component: ViewEditPdvComponent;
  let fixture: ComponentFixture<ViewEditPdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewEditPdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewEditPdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

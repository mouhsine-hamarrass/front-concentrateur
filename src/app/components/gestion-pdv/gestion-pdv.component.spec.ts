import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPdvComponent } from './gestion-pdv.component';

describe('GestionPdvComponent', () => {
  let component: GestionPdvComponent;
  let fixture: ComponentFixture<GestionPdvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionPdvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

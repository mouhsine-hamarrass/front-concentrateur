import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributaireComponent } from './attributaire.component';

describe('AttributaireComponent', () => {
  let component: AttributaireComponent;
  let fixture: ComponentFixture<AttributaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttributaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttributaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

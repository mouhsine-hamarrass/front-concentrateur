import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementLotComponent } from './paiement-lot.component';

describe('PaiementLotComponent', () => {
  let component: PaiementLotComponent;
  let fixture: ComponentFixture<PaiementLotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiementLotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementLotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

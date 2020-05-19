import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitConcentrateurComponent } from './produit-concentrateur.component';

describe('ProduitConcentrateurComponent', () => {
  let component: ProduitConcentrateurComponent;
  let fixture: ComponentFixture<ProduitConcentrateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduitConcentrateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduitConcentrateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

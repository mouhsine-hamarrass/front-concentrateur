import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargementVersionComponent } from './chargement-version.component';

describe('ChargementVersionComponent', () => {
  let component: ChargementVersionComponent;
  let fixture: ComponentFixture<ChargementVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargementVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargementVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

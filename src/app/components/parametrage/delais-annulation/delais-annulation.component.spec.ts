import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelaisAnnulationComponent } from './delais-annulation.component';

describe('DelaisAnnulationComponent', () => {
  let component: DelaisAnnulationComponent;
  let fixture: ComponentFixture<DelaisAnnulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelaisAnnulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelaisAnnulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

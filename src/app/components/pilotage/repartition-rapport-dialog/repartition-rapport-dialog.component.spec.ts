import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepartitionRapportDialogComponent } from './repartition-rapport-dialog.component';

describe('RepartitionRapportDialogComponent', () => {
  let component: RepartitionRapportDialogComponent;
  let fixture: ComponentFixture<RepartitionRapportDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepartitionRapportDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepartitionRapportDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

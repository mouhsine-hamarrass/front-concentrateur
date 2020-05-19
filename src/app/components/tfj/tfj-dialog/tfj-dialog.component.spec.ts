import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TfjDialogComponent } from './tfj-dialog.component';

describe('TfjDialogComponent', () => {
  let component: TfjDialogComponent;
  let fixture: ComponentFixture<TfjDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TfjDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TfjDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
